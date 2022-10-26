import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { } from "react-icons/fa";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='w-full min-h-screen bg-orange-100 flex justify-center items-center text-center'>
            <div>
                <div className='text-9xl mb-6'>😁</div>
                <h1 className='text-4xl font-bold'>{error.statusText || error.message}</h1>
                <h2 className='text-5xl mb-6'>{error.status}</h2>
                <Link to='/'><button className='btn btn-primary'>Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;