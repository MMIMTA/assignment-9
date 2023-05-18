import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import technology from '../../images/technology.jpg';

const Topic = () => {
    const quiz=useLoaderData(); 
        
    return (
        <div>
        <div className='grid grid-cols-2 gap-4 text-left p-10 mb-50'>
        <p>
        React comes with JSX, an optional syntax extension, which makes it possible to write your own components.These components basically accept HTML quoting and also makes all subcomponent rendering a delightful experience for developers.Though there have been many debates on the matter of JSX, it has already for writing custom components, building high-volume applications, and converting HTML mockups into ReactElement trees.Not only this but after creating components developers can reuse them in whole app as components are highly customizable, due to this it speeds up the development process.
        </p>
        <div className='h-60'>
        <img src={technology} alt="" />
        </div>
        </div>
        <div className='flex gap-4'>
            {
                quiz.data.map(qz=><Quiz key={qz.id} 
                    qz={qz}></Quiz>)
            }
        </div>
        </div>
    );
};

export default Topic;