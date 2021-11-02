import { QUESTION_TYPE } from '../../question-types.enum'
// import { useState } from 'react'

export function EnterResultFormQuestion({ changeQuestionBody }) {
  // const [yesNo, setYesNo] = useState(null)

  function genDataAndCreateQuestion(event) {
    const valueEnterQuestion = event.target.value
    const question = {
      question_type: QUESTION_TYPE.CONTENT_RESULT,
      alternatives: [
        {
          answer_content: valueEnterQuestion,
          answer_correct: true,
        },
      ],
    }

    return changeQuestionBody(question)
  }

  return (
    <div className="type-4" id="option1-type-4">
      <input
        type="text"
        name="question_type"
        placeholder="Content answer: "
        className="input-2-type-4"
        onChange={(event) => {
          genDataAndCreateQuestion(event)
        }}
      />
    </div>
  )
}
