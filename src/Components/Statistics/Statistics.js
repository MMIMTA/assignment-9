import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = ({question}) => {
    const qus=useLoaderData();
    console.log(question)
    return (
        <div>
            
        </div>
    );
};

export default Statistics;