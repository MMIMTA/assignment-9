import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({qz}) => {
    const{id,name,logo,total}=qz;
    
    return (
        <div className='border-2 rounded relative'>
            <img src={logo} alt="" />
           <div className='text-left pl-5 mb-10 text-xl '>
            Name:{name} <br />
            Total:{total} <br />
            <Link to={`/quiz/${id}`}>
            <button className='bg-slate-400 absolute bottom-0 w-full left-0 rounded' >Set Quiz</button>
            </Link>
           </div>
        </div>
    );
};

export default Quiz;