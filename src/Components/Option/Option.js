import React from 'react';

const Option = ({option}) => {
    return (
        <div className='border rounded p-5'>
            <li>{option}</li>
        </div>
    );
};

export default Option;