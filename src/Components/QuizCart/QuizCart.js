import React from 'react';
import Option from '../Option/Option';
import { AiOutlineEye } from 'react-icons/ai';
import Statistics from '../Statistics/Statistics';

const QuizCart = ({question,index}) => {
    return (
        <div className='pt-5 border-2 border-slate-400 rounded '>
            <div className='flex gap-10 p-5'>
            <span className='text-base text-teal-600'>Quiz {index+1}</span>
          
            {question.question} 
           <AiOutlineEye />
           </div> 
           <div className='grid grid-cols-2 gap-4 text-left m-5'>
            {
                question.options.map((option,index)=><Option
                key={index}
                option={option}
                correctAnswer={question.correctAnswer}></Option> )
            }
            </div> 
            <Statistics question={question}></Statistics>
        </div>
    );
};

export default QuizCart;