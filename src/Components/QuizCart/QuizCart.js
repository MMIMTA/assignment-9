import React from 'react';
import Option from '../Option/Option'

const QuizCart = ({question,index}) => {
    return (
        <div className='pt-5 border-2 border-slate-400 rounded '>
           
            <span className='text-base text-teal-600'>Quiz {index+1}</span>
            {question.question}
           <div className='grid grid-cols-2 gap-4 text-left m-5'>
            {
                question.options.map((option,index)=><Option
                option={option}></Option> )
            }
            </div> 
        </div>
    );
};

export default QuizCart;