import React, { useState } from 'react';
import Item from '../Item/Item';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import Header from '../Header/Header';
const QuizItems = ({quizItem}) => {
    const [disabled,setDisabled]=useState(false)
    const [text,setText]=useState("")
    const {question,id,correctAnswer,options}=quizItem;
   
    const handleQuiz=quiz=>{
        if(quiz==correctAnswer){
             toast("Correct Ans! ",{ position: toast.POSITION.TOP_CENTER});
        }else{
            toast("Worng Ans!",{ position: toast.POSITION.TOP_CENTER});
        }
        setDisabled(true)
    }
   
    const notify = () => toast(correctAnswer);
    return (
       
        
             <div className='flex justify-center mb-10'>
            <div className='w-3/5 border  mt-8 p-5 bg-teal-500 text-white rounded-lg'>
                <div className='p-5 justify-between flex'>
                    <p>{question}</p>
                    <EyeIcon onClick={notify} className="h-6 w-6 text-white"/>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-5 p-5 '>
                    {
                        options.map(option=><Item key={option.id} option={option} handleQuiz={handleQuiz} disabled={disabled}></Item>)
                    }
                </div>
            </div>
            <ToastContainer />
            
        </div>
       
    );
};

export default QuizItems;