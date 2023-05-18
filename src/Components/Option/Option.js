import React from 'react';

const Option = ({option,correctAnswer}) => {

    return (
        <div className='border rounded p-5'>
            <input type="radio" value='option' name="option" /> {option} 
           
        </div>
    );
};

export default Option;