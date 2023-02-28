import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currentAnswers, quizQuestions, setAnswers, setSubmitted } from '../Slices/quizSlice';

import './Quizboard.scss'
import Timer from './Timer';

const QuizBoard = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);

    const answers = useSelector(currentAnswers)
    const questions = useSelector(quizQuestions)

    const dispatch = useDispatch();

    const changeHandler = (option) => {
        dispatch(setAnswers({ [activeQuestion]: option }));
    }

    const submitQuiz = () => {
        dispatch(setSubmitted(true));
    }

    const onNext = () => {
        if (!answers[activeQuestion]) {
            dispatch(setAnswers({ [activeQuestion]: null }));
        }
        setActiveQuestion(activeQuestion + 1)
    }

    const onPrevious = () => {
        setActiveQuestion(activeQuestion - 1)
    }
    return (
        <div className='quizBoard'>
            <div className='questionControl'>
                <button disabled={activeQuestion === 0} onClick={onPrevious}>Previous</button>
                <div>Attempt Questions Here</div>
                <button disabled={activeQuestion === questions.length - 1 } onClick={onNext}>Next</button>
            </div>
            <div className='question'>#{activeQuestion + 1} {questions[activeQuestion].question}</div>
            <div className='options'>
                {questions[activeQuestion].options.map((option, idx) => {
                    return (<div className={`option ${answers[activeQuestion] === option&& "highlighted"}`} onClick={() => changeHandler(option)}>{option}</div>)
                })}
            </div>
            <div className='timer'><Timer /></div>
            <button className='submitButton' onClick={submitQuiz}>Submit</button>
        </div>
    )
}

export default QuizBoard