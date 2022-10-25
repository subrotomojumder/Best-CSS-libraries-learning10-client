import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from "react-icons/fa";

import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { googleLogin, facebookLogin, signIn } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({});
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo.password, userInfo.email)
        if (userInfo.password.length < 6) {
            toast.error('Your password wrong')
            setError('Password provide at least 6 characters!')
            return;
        }
        signIn(userInfo.email, userInfo.password)
            .then(() => {
                toast.success('please check your email and verified your account')
            })
            .catch(e => {
                setError(e.textStatus || e.message)
            })
    }
    const handleInputChange = e => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(() => {

            })
            .catch(e => {
                toast.error(e.message)
            })
    }
    const handleFacebookSignIn = () => {
        facebookLogin()
            .then(() => {

            })
            .catch(e => {
                console.log(e)
                toast.error(e.message)
            })
    }

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
            <form className="card-body z-0">
                <div className="form-control">
                    <h1 className='text-2xl font-semibold text-primary-focus'>Please Login..</h1>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input onChange={handleInputChange} name='email' type="text" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input onChange={handleInputChange} name='password' type="text" placeholder="password" className="input input-bordered mb-3" />
                    {error && <small className='text-red-600 ml-3'>error: {error}</small>}
                    <Link to='/register'><small className="link link-hover text-blue-600">Create new account !</small></Link>
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
                <div className="form-control mt-6">
                    <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;