import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='bg-blue-100 px-4 lg:px-16 min-h-screen'>
            <h1 className='text-4xl font-semibold text-center text-purple-600 py-4'>Our all course Tutorials</h1>
            <div className='lg:grid grid-cols-4'>
                <div>
                    {
                        allCourses.map(course =>
                            <Link>
                                <p
                                    key={course.id}
                                    className='btn btn-outline outline-yellow-300 w-full text-blue-700 my-3'
                                >
                                  Lesion:  {course.name}
                                </p>
                            </Link>)
                    }
                </div>
                <div className='lg:col-span-3 border bottom-6'>
                    kdfjfkldsjfkljkfljklsfj
                </div>
            </div>
        </div>
    );
};

export default Courses;