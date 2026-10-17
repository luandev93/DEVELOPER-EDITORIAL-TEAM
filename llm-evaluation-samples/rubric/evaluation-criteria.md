# LLM Response Evaluation Criteria

Use the criteria below consistently across side-by-side comparisons.

## 1. Accuracy

Evaluate whether factual statements are correct and whether the response avoids misleading or incorrect claims.

- **5** — Accurate; no material factual errors identified.
- **4** — Mostly accurate; only minor issues that do not change the answer materially.
- **3** — Generally useful but contains noticeable inaccuracies or imprecision.
- **2** — Contains significant factual problems that reduce reliability.
- **1** — Fundamentally inaccurate or misleading.

## 2. Instruction Following

Evaluate whether the response follows explicit and implicit user instructions, including format, scope, length, tone, required elements, and constraints.

- **5** — Fully follows the instructions.
- **4** — Follows almost all instructions; only a minor deviation.
- **3** — Satisfies the main request but misses one or more meaningful constraints.
- **2** — Misses important instructions.
- **1** — Fails to follow the central request.

## 3. Relevance

Evaluate how directly the response addresses the user's request without unnecessary digressions.

- **5** — Direct and fully relevant.
- **4** — Mostly focused with minor unnecessary detail.
- **3** — Useful but noticeably verbose or partially off-topic.
- **2** — Contains substantial irrelevant material.
- **1** — Largely unrelated to the request.

## 4. Completeness

Evaluate whether all important parts of the request are addressed.

- **5** — Covers all requested elements.
- **4** — Covers nearly all requested elements.
- **3** — Covers the main request but leaves meaningful gaps.
- **2** — Omits several important elements.
- **1** — Severely incomplete.

## 5. Clarity

Evaluate organization, readability, precision, and whether the response is easy to understand for the intended audience.

- **5** — Clear, concise, and well organized.
- **4** — Clear overall with minor style or organization issues.
- **3** — Understandable but could be significantly clearer.
- **2** — Difficult to follow in important places.
- **1** — Confusing or poorly structured.

## 6. No Unsupported Claims

Evaluate whether the response avoids inventing facts, sources, capabilities, credentials, events, or details not supported by the prompt or reliable evidence.

- **5** — No unsupported claims identified.
- **4** — One minor unsupported assumption with little impact.
- **3** — Some unsupported details, but the core answer remains usable.
- **2** — Significant unsupported claims affect reliability.
- **1** — Serious fabrication or hallucination.

## 7. Overall Quality

Consider the response as a whole. This score should reflect the balance of correctness, usefulness, instruction following, clarity, and reliability rather than writing style alone.

- **5** — Strong response with no material issues.
- **4** — Good response with minor weaknesses.
- **3** — Acceptable but meaningfully flawed.
- **2** — Weak; major improvement is needed.
- **1** — Poor or unusable.

## Decision Rule

Prefer the response that better satisfies the user's actual request under the full set of constraints. More detail is not automatically better. A concise response that fully follows instructions can be stronger than a longer response containing extra but unnecessary information.