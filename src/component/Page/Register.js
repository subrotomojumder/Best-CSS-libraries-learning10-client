import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook, FaTruckLoading } from "react-icons/fa";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {createUser, googleLogin, facebookLogin, updateUserProfileFunc, emailVerifyFunc} = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState('');
    const navigate = useNavigate();
        
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = userInfo.name;
        const photoURL = userInfo.photoUrl;
        const email = userInfo.email;
        const password = userInfo.password;

        if (password.length < 6) {
            toast.error('Your password wrong')
            setError('Password provide at least 6 characters!')
            return;
        }
        // create User functionality 
        createUser(email, password)
        .then(()=>{
            updateUserProfileFunc(name, photoURL)
            .then(()=> { })
            .catch(e => setError(e.message))
            emailVerifyFunc()
            .then(()=> { })
            navigate('/')
            setError('')
            toast.success('please check your email and reload your page', {duration: 8000,})
            e.target.reset();
        })
        .catch(e => {
            setError(e.textStatus || e.message)
            toast.error(e.message)
        })

    }
    // access input value
    const handleNameChange = e =>{
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleGoogleSignIn = () => {
        googleLogin()
        .then(()=>{

        })
        .catch(e => {
            toast.error(e.message)
        })
    }
    const handleFacebookSignIn = () => {
        facebookLogin()
        .then(()=>{

        })
        .catch(e => {
            console.log(e)
            toast.error(e.message)
        })
    }

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <h1 className='text-3xl font-semibold text-primary-focus'>Create account..</h1>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input onChange={handleNameChange} name='name' type="text" placeholder="name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input onChange={handleNameChange} name='photoUrl' type="text" placeholder="photo url" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={handleNameChange} name='email' type="email" placeholder="email" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={handleNameChange} name='password' type="password" placeholder="password" className="input input-bordered" required/>
                    <Link to='/login'><small className="link link-hover text-blue-600">Already have a account. login</small></Link>
                    {error && <small className='text-red-600'>error: {error}</small>}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <div className='flex justify-evenly mt-3'>
                    <div onClick={handleGoogleSignIn}>
                        <FaGoogle className='mx-auto text-2xl text-orange-500 hover:text-sky-500' />
                        <p><small>google login</small></p>
                    </div>
                    <div onClick={handleFacebookSignIn}>
                        <FaFacebook className='mx-auto text-2xl text-orange-500 hover:text-sky-500' />
                        <p><small>facebook login</small></p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;