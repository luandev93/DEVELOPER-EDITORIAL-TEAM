# Side-by-Side LLM Evaluation

## Evaluation ID

001-instruction-following

## Prompt

> Explain in no more than three sentences why regular backups are important. Mention both hardware failure and accidental deletion. Write for a non-technical audience.

## Response A

> Regular backups protect your files if your computer or storage device fails. They also allow you to recover information that was deleted accidentally. Keeping a recent backup means an unexpected problem is less likely to cause permanent data loss.

## Response B

> Backups are copies of important data stored separately from the original files. There are many different backup strategies, including full backups, incremental backups, differential backups, local backups, and cloud-based backups. Organizations often follow the 3-2-1 rule, which recommends maintaining three copies of data on two different types of storage, with one copy stored off-site. Hardware failures are a common cause of data loss, and backups can also help when a user accidentally deletes a file. Companies should therefore implement comprehensive disaster-recovery plans.

## Criterion Scores

| Criterion | Response A | Response B |
|---|---:|---:|
| Accuracy | 5/5 | 5/5 |
| Instruction Following | 5/5 | 2/5 |
| Relevance | 5/5 | 3/5 |
| Completeness | 5/5 | 5/5 |
| Clarity | 5/5 | 4/5 |
| No Unsupported Claims | 5/5 | 5/5 |
| Overall Quality | 5/5 | 3/5 |

## Preferred Response

**Response A**

## Justification

Response A satisfies every explicit instruction in the prompt. It uses exactly three sentences, explains the purpose of backups in language suitable for a non-technical reader, and explicitly addresses both required failure scenarios: hardware failure and accidental deletion.

Response B contains generally accurate information and also mentions hardware failure and accidental deletion. However, it fails an important explicit constraint because it contains five sentences instead of a maximum of three. It also introduces backup terminology such as "incremental backups," "differential backups," and the "3-2-1 rule," which was not requested and makes the answer less appropriate for the requested non-technical audience.

The additional information in Response B does not compensate for the instruction-following failure. Because Response A is accurate, complete, concise, and fully compliant with the user's constraints, it is the stronger response.

## Main Issue in the Rejected Response

Response B does not respect the three-sentence limit and includes unnecessary technical detail for the specified audience.

## Confidence

**High**
