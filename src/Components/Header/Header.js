import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex space-x-80 text-cyan-700'>
            <div className='text-2xl font-bold'>
               Online Quiz Zone
            </div>
            <div className='text-xl space-x-12'>
             <Link to="/topic">Topic</Link>
             <Link to="/statistics">Statistics</Link>
             <Link to="/blog">Blog</Link>
            </div>
            
        </div>
    );
};

export default Header;