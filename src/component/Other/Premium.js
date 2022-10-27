import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Premium = () => {
    const { user } = useContext(AuthContext);
    const tutorial = useLoaderData();
    const { id, pirce, name } = tutorial;
    
    const [confirm, setConfirm] = useState(false);
    const handleConfirm = () => {
        setConfirm(true);
        toast.success('your payment success')
    }
    return (
        <div className='min-w-full min-h-screen flex justify-center items-center mt-[-100px]'>
            {
                confirm ? 
                <div className='text-center'>
                    <h1 className='text-2xl'>Payment success!</h1>
                    <h3 className='text-2xl font-semibold my-2'>Have a Good journey of your {name} learning</h3>
                    <h3 className='text-4xl text-orange-600'>Welcome</h3>
                </div>
                : <div className='bg-cyan-400 rounded-lg p-10 text-center'>
                <div>
                    <h1 className='text-5xl text-white mb-3'>{name}</h1>
                    <h3 className='text-yellow-700 text-3xl mb-3'>Price: ${pirce}</h3>
                </div>
                <div className='mb-6'>
                    <h3 className='text-2xl text-blue-700 mb-2'>Name: {user.displayName}</h3>
                    <p className='font-bold text-gray-700'>ID: {user.uid}</p>
                </div>
                <div className='mt-4'>
                    <Link to={`/course/${id}`}><button className='btn btn-outline btn-error'>Cancel</button></Link>
                    <button onClick={handleConfirm} className='ml-4 btn btn-primary'>Confirm</button>
                </div>
            </div>
            }
        </div>
    );
};

export default Premium;