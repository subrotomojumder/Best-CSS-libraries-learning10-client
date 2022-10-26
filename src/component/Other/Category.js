import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ tutorial }) => {
    const { id, heading,  img } = tutorial;
    return (
        <div className='border-4 border-warning rounded-lg my-3 lg:my-0 relative'>
            <Link to={`/course/${tutorial.id}`}>
                <img src={img} alt="" className='w-full h-full' />
            </Link>
        </div>
    );
};

export default Category;