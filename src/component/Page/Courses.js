import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Category from '../Other/Category';

const Courses = () => {
    const allTutorial= useLoaderData();
    return (
        <div className='bg-blue-100 px-4 lg:px-16 min-h-screen'>
            <h1 className='text-4xl font-semibold text-center text-purple-600 py-8'>Our courses all Tutorial</h1>
            <div className='lg:grid grid-cols-4 gap-2'>
                <div className=''>
                    {
                        allTutorial.map(tutorial =>
                            <Link to={`/course/${tutorial.id}`} key={tutorial.id}>
                                <p
                                    className='btn btn-outline w-11/12 text-blue-700 my-3 text-xl'
                                >
                                  <span className='text-warning font-normal'>Tutorial:- </span> {tutorial.name}
                                </p>
                            </Link>)
                    }
                </div>
                <div className='lg:col-span-3 mt-4 mb-16 lg:grid grid-cols-2 gap-6 lg:ml-6'>
                    {
                        allTutorial.map(tutorial => <Category tutorial={tutorial} key={tutorial.id}></Category>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;