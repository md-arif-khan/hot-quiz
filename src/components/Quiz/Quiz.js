import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItems from '../QuizItems/QuizItems';

const Quiz = () => {
    const quiz=useLoaderData()
    const totalQuiz=quiz.data.questions
    console.log(quiz)
    return (
        <div>
            <div className='flex justify-center mt-10'>
            <div className='w-3/5 bg-teal-500 text-center p-5 rounded-2xl text-white'>
                <h2 className='text-4xl'>{quiz.data.name}</h2>
                
               
             </div>
            </div>
            <div>
                {
                   totalQuiz.map(quizItem=><QuizItems key={quizItem.id} quizItem={quizItem}></QuizItems>) 
                }
            </div>
        </div>
    );
};

export default Quiz;