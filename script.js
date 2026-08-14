(function() {
  const END_DATE = new Date('2026-08-21T23:59:59').getTime();
  const LINK_LANCAMENTO = 'https://pay.kiwify.com.br/sJLpBEb';
  const LINK_POS        = 'https://pay.kiwify.com.br/6TLkZ12';

  function updatePriceUI(expired) {
    const boxes = [
      { box: 'priceBox', old: 'priceOld', new: 'priceNew', inst: 'priceInstallment', sav: 'priceSavings', lbl: 'priceLabel' },
      { box: 'priceBoxFinal', old: 'priceOldFinal', new: 'priceNewFinal', inst: 'priceInstallmentFinal', sav: 'priceSavingsFinal', lbl: 'priceLabelFinal' }
    ];

    boxes.forEach(ids => {
      const box = document.getElementById(ids.box);
      if (!box) return;
      if (expired) {
        box.classList.add('expired');
        document.getElementById(ids.lbl).textContent = 'Preço Atual (Pós-Lançamento)';
        document.getElementById(ids.old).style.display = 'none';
        document.getElementById(ids.new).innerHTML = 'R$ 67<small>,00</small>';
        document.getElementById(ids.inst).textContent = 'ou 6x de R$ 12,66';
        document.getElementById(ids.sav).style.display = 'none';
      } else {
        box.classList.remove('expired');
      }
    });

    const link = expired ? LINK_POS : LINK_LANCAMENTO;
    ['ctaMain', 'ctaFinal'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.href = link;
    });
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = END_DATE - now;
    const el = document.getElementById('countdown');

    if (diff <= 0) {
      el.textContent = 'OFERTA ENCERRADA';
      updatePriceUI(true);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    el.textContent =
      String(days).padStart(2, '0') + ':' +
      String(hours).padStart(2, '0') + ':' +
      String(minutes).padStart(2, '0') + ':' +
      String(seconds).padStart(2, '0');

    updatePriceUI(false);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();

let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const totalSlides = track.children.length;
const dotsContainer = document.getElementById('carouselDots');

for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('button');
  dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => goToSlide(i);
  dotsContainer.appendChild(dot);
}

function updateCarousel() {
  track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function moveCarousel(direction) {
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
}

setInterval(() => moveCarousel(1), 6000);

document.getElementById('commentForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  if (this._honey.value !== '') return;

  const formData = new FormData(this);
  const submitBtn = this.querySelector('.form-submit');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Enviando...';
  submitBtn.disabled = true;

  try {
    const response = await fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      document.getElementById('formSuccess').style.display = 'block';
      this.reset();
      setTimeout(() => {
        document.getElementById('formSuccess').style.display = 'none';
      }, 5000);
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  } catch (err) {
    alert('Erro de conexão. Tente novamente.');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});
