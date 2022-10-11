import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import QuizItems from '../QuizItems/QuizItems';

const Quiz = () => {
    const [right,setRight]=useState(0)
    const [worng,setWorng]=useState(0)
    const quiz=useLoaderData()
    const totalQuiz=quiz.data.questions
    console.log(quiz)
    return (
        <div>
            <div className='flex justify-center mt-10'>
            <div className='w-3/5 bg-teal-500 text-center p-5 rounded-2xl text-white lg:flex lg:items-center lg:justify-between'>
                
                  <p>Right: {right} && Worng: {worng}</p>
                  <h2 className='text-4xl mb-2'>{quiz.data.name}</h2>
                  <Link className='border p-1' to="/">Back to home</Link>
                 
             </div>
            </div>
            <div>
                {
                   totalQuiz.map(quizItem=><QuizItems key={quizItem.id} quizItem={quizItem} right={right} setRight={setRight} worng={worng} setWorng={setWorng}></QuizItems>) 
                }
            </div>
        </div>
    );
};

export default Quiz;