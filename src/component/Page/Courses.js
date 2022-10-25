import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div className='bg-blue-100 px-4 lg:px-16 min-h-screen'>
            <h1 className='text-4xl font-semibold text-center text-purple-600 py-4'>Our all courses Library</h1>
            <div className='lg:grid grid-cols-4'>
                <div className='border-2 border-yellow-400'>
                    {
                        allCourses.map(course =>
                            <Link>
                                <button
                                    key={course.id}
                                    className="text-white transition duration-200 rounded shadow-md  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"

                                >
                                    {course.name}
                                </button>
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