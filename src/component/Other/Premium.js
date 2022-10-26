import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const tutorial = useLoaderData();
    const {id, name} = tutorial;
    return (
        <div>
            <h1 className='text-center text-5xl'>{name}</h1>
        </div>
    );
};

export default Premium;