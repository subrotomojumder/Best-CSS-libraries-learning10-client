import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaUser } from "react-icons/fa";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [them, setThem] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="bg-indigo-500">
            <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                    >
                        <img className="h-10" src='https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png' alt="" />
                        <span className="ml-2 text-xl font-bold tracking-wide text-orange-200 uppercase">
                            Best CSS Libraries
                        </span>
                    </Link>
                    <ul className="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                to="/courses"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Courses
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/faq"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/blog"
                                aria-label="Product pricing"
                                title="Product pricing"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <button title="mode change" onClick={() => setThem(!them)} className={them ? "py-1 w-20 rounded-md bg-white" : "py-1 w-20 rounded-md bg-black text-white"}>{them ? "Light" : "Dark"}</button>
                        </li>
                        <li>
                            {user && user.uid ?
                                <><Link to='/profile'>
                                    <div className="tooltip tooltip-left" data-tip={user.displayName}>
                                        {user && user.photoURL ? <img src={user.photoURL} className='h-10 w-10 rounded-full' alt="" /> : <FaUser className="text-3xl text-white"></FaUser>}
                                    </div>
                                </Link>
                                <button onClick={logOut}>logout</button></>
                                : <Link
                                    to="/login"
                                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Sign up"
                                    title="Sign up"
                                >
                                    Login
                                </Link>
                            }
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <Link
                                                to=""
                                                aria-label="Company"
                                                title="Company"
                                                className="inline-flex items-center"
                                            >
                                                <img className="h-10" src='https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png' alt="" />
                                                <span className="text-lg font-bold tracking-wide text-orange-300 uppercase">
                                                    The Best CSS Libraries
                                                </span>
                                            </Link>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link
                                                    to="/courses"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/faq"
                                                    aria-label="Our product"
                                                    title="Our product"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blog"
                                                    aria-label="Product pricing"
                                                    title="Product pricing"
                                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <button onClick={() => setThem(!them)} className={them ? "py-1 w-20 rounded-md bg-white" : "py-1 w-20 rounded-md bg-black text-white"}>{them ? "Light" : "Dark"}</button>
                                            </li>
                                            <li>
                                                <li>
                                                    {user && user.uid ?
                                                        <Link to='/profile'>
                                                            <div title={user.display}>
                                                                {user && user.photoURL ? <img src={user.photoURL} className='w-20' alt="" /> : <FaUser className="text-3xl"></FaUser>}
                                                            </div>
                                                        </Link>
                                                        : <Link
                                                            to="/login"
                                                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                            aria-label="Sign up"
                                                            title="Sign up"
                                                        >
                                                            Login
                                                        </Link>
                                                    }
                                                </li>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;