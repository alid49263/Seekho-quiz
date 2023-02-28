import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { currentTime, setSubmitted, setTime } from '../Slices/quizSlice';
import './Timer.scss';

const Timer = () => {
    const time = useSelector(currentTime);
    const dispatch = useDispatch();
    const timeRef = useRef();
    timeRef.current = time;

    useEffect(() => {
        const interval = setInterval(function () {
            if (timeRef.current === 0) {
                clearInterval(interval)
                dispatch(setSubmitted(true));
                return;
            }
            dispatch(setTime(timeRef.current - 1));
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='time'>{time} Sec</div>
    )
}

export default memo(Timer)