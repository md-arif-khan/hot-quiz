import React from 'react';
import './Item.css'
const Item = ({option,handleQuiz,disabled}) => {
    return (
        <div>
            <div  onClick={()=>handleQuiz(option)} className={`rounded-lg border p-3 text-center hover:bg-[#3029298f] ${disabled===true?'disabled':null}`}>
                        <p>{option}</p>                      
            </div>
        </div>
    );
};

export default Item;