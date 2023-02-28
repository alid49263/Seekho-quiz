import React from 'react'

import { useSelector } from 'react-redux'
import { currentAnswers } from '../Slices/quizSlice'  
import './Sidebar.scss'

const Sidebar = () => {
  const answers=useSelector(currentAnswers)
  return (
    <div className='sidebarContainer'>
        <img width={125} height={100} src="https://quizizz.com/wf/assets/62fa6419161d3a641f681ceb_Logo.svg" alt='logoo'></img>
        <div className='reviewHeading'>Review answers here!</div>
        <div className='answers'>{Object.entries(answers).length>0?Object.entries(answers).map((answer)=>{
             return (<div className='answer'>#{parseInt(answer[0])+1}: {answer[1]?<span className='answered'>{answer[1]}</span>:<span className='skipped'>Skipped</span>}</div>)
        }):<div className='answers'>No Questions Attempted!</div>}</div>
    </div>
  )
}

export default Sidebar