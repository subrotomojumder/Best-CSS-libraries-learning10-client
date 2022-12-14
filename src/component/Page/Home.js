import React from 'react'; 
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <img
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/47/5c5eb0de59424db95f1a75e67310b5/CAD2-Intro-to-Cloud-Dev-w-HTML--CSS--and-JavaScript.jpg?auto=format%2Ccompress&dpr=1"
                    alt=""
                />
            </div>
            <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:pl-16 lg:max-w-screen-xl">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block px-2 py-px mb-2 text-md font-bold font-serif tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Styles !!
                    </p>
                    <h2 className="mb-5 font-serif text-3xl font-bold tracking-tight text-indigo-700 sm:text-4xl sm:leading-none">
                        Courses of CSS Libraries Build{' '}
                        <span className="inline-block text-lime-500 mt-2 font-sans">
                            For UI/UX
                        </span>
                    </h2>
                    <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
                    Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a 
                    markup language such as HTML or XML. There is no alternative to CSS Libraries fo styling.
                    </p>
                    <div className="flex items-center">
                        <Link to='courses'>
                            <button className='bg-indigo-600 py-2 px-4 text-white btn'>
                                Get started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;