import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';

const QuizDetails = () => {
    const details= useLoaderData();
    console.log(details.data)
    
    return (
        <div className='space-y-10'>
            
            Quiz of: {details.data.name} <br />
           {
            details.data.questions.map((question,index)=><QuizCart
                key={question.id}
                index={index}
                question={question}
                 ></QuizCart>
              
                 )
              
           }
         
        </div>
    );
};

export default QuizDetails;