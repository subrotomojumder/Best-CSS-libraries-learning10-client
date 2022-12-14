import React from 'react';
import { createRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import Pdf from 'react-to-pdf';

const refer = createRef();

const CourseDetails = () => {
    const course = useLoaderData();
    const { id, name, heading, img, description } = course;
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [15,7]
    };
    return (
        <div ref={refer} className='bg-gray-100 min-h-screen px-8 py-20 lg:px-16'>
            <div className='py-8 lg:grid grid-cols-2 items-center'>
                <div>
                    <img src={img} className='w-full min-h-full' alt="" />
                </div>
                <div className='mt-8 lg:ml-7 lg:mt-0'>
                    <h1 className='text-4xl mb-4'>Tutorial: <span className='text-indigo-600 font-serif text-5xl'>{name}</span></h1>
                    <h3 className='text-3xl ml-1 mb-2 text-orange-600'>{heading}</h3>
                    <p className='text-lg'>{description}</p>
                    <div className=''>
                        <Pdf targetRef={refer} filename={`${name}-course.pdf`} options={options}>
                            {({ toPdf }) => <button
                                
                                onClick={toPdf}
                                className='hover:link text-primary py-2 px-3 my-4 ml-4'
                            >
                                Download-pdf
                            </button>}
                        </Pdf>
                        <Link to={`/tutorial/${id}`}><button className='btn btn-secondary block my-2 ml-2'>Get Premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;