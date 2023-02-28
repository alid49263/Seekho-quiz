import React from 'react'
import { useSelector } from 'react-redux'
import { currentAnswers, currentTime, quizQuestions } from '../Slices/quizSlice'
import './SubmittedScreen.scss'

import logo from '../logo.svg'

const SubmittedScreen = () => {
  const questions=useSelector(quizQuestions)
  const answers=useSelector(currentAnswers);
  const time=useSelector(currentTime)

  let correct= 0
  Object.entries(answers).map(answer=>{
    if(questions[answer[0]].answer===answer[1]){
        correct+=1
    }
  })

  return (
    <div className='submittedScreen'>
        <img src={logo} className="verifiedlogo" alt="logo" />
        <div className='heading'>You have successfully attempted the Assesment</div>
        <div className='scorePoints'>Question Asked: {questions.length}</div>
        <div className='scorePoints'>Question Correct:  {correct}</div>
        <div className='scorePoints'>Your score: {correct/questions.length*100}%</div>
        <div className='scorePoints'>Time took: {60-time} Sec</div>
    </div>
  )
}

export default SubmittedScreen