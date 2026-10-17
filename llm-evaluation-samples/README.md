# LLM Evaluation Samples

This directory contains structured side-by-side evaluations of large language model responses.

The goal is to demonstrate consistent, evidence-based judgment across criteria such as accuracy, instruction following, relevance, completeness, clarity, unsupported claims, and overall response quality.

Each evaluation documents the original prompt, two candidate responses, criterion-based scores, a final preference, and a specific written justification.

## Evaluation Criteria

- Accuracy
- Instruction Following
- Relevance
- Completeness
- Clarity
- No Unsupported Claims
- Overall Quality

## Scoring Scale

- **1** — Major problems
- **2** — Significant problems
- **3** — Acceptable but flawed
- **4** — Good
- **5** — Excellent

For **No Unsupported Claims**, a score of 5 means no unsupported claims were identified, while 1 indicates serious unsupported claims.

## Structure

```text
llm-evaluation-samples/
├── README.md
├── templates/
│   └── side-by-side-evaluation.md
├── rubric/
│   └── evaluation-criteria.md
└── evaluations/
    └── 001-instruction-following.md
```

These samples are intended as a practical portfolio of LLM response evaluation and quality review.