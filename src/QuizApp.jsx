import React from 'react';
import { data } from './data';
import { useState } from 'react';
import './Style.css';

export default function QuizApp() {
    const [index,setIndex] = useState(0);
    const [quizFinished,setQuizFinished] = useState(false);
    const [option, setOption] = useState(null);

    const correctAnswer = ['Option1','Option1','Option2','Option3',
        'Option1','Option1','Option2','Option2','Option3','Option1'];

        const handleSelect = (optn) => {
            setOption(optn);
        }

    const [score,setScore] = useState(0);
    const handleClick = () => {
    if(option === correctAnswer[index]) {
        setScore(score + 1);
    }

        if(index < data.length-1) {
        setIndex(index+1);
        setOption(null);
        } else {
            setQuizFinished(true);
        }
    }
        if(quizFinished) {
            return (
                <div>
                <h1>Quiz Finished</h1>
                <h3>Your Score Is: {score} Out of {data.length}</h3>
                </div>
            );
    }
    return (
        <div className='quiz'>
            <h1>Quiz App</h1>
        <h3>{data[index].Question}</h3>
        <ul>
            <li className = {option === 'Option1'?'selected':''}
            onClick={() => handleSelect('Option1')}>{data[index].Option1}</li>
            <li className = {option === 'Option2'?'selected':''}
            onClick={() => handleSelect('Option2')}>{data[index].Option2}</li>
            <li className = {option === 'Option3'?'selected':''}
            onClick={() => handleSelect('Option3')}>{data[index].Option3}</li>
            <li className = {option === 'Option4'?'selected':''}
            onClick={() => handleSelect('Option4')}>{data[index].Option4}</li>
        </ul>

        <button onClick={handleClick} disabled={!option}>Next</button>

        <h5>Question {index +1} Out Of {data.length}</h5>
        </div>
    )
}