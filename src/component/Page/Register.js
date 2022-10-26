import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {createUser, googleLogin, facebookLogin} = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState('');
        
    const handleSubmit = (e) => {
        console.log(userInfo.name, userInfo.photoUrl, userInfo.email, userInfo.password)
        e.preventDefault();
        if (userInfo.password.length < 6) {
            toast.error('Your password wrong')
            setError('Password provide at least 6 characters!')
            return;
        }
        createUser(userInfo.email, userInfo.password)
        .then(()=>{
            
            toast.success('please reload your page')
        })
        .catch(e => {
            setError(e.textStatus || e.message)
        })

    }
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
                    {error && <small className='text-red-600 ml-3'>error: {error}</small>}
                    <Link to='/login'><small className="link link-hover text-blue-600">Already have a account. login</small></Link>
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