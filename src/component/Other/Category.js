import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Category = ({ tutorial }) => {
    const { id, pirce,name, img } = tutorial;
    return (
        <div>
            <div className='border-4 border-warning rounded-lg my-3 lg:my-0'>
                <img src={img} alt="" className='w-full lg:h-64' />
                <div className='flex justify-between items-center bg-cyan-300 p-3'>
        
                        <h2 className='text-2xl font-bold'>{name}</h2>
                    <h3 className='text-2xl ml-6 text-orange-800'>Price: ${pirce}</h3>
                    <Link to={`/course/${id}`}>
                        <button className='btn btn-warning'>See more..<FaArrowRight/></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;