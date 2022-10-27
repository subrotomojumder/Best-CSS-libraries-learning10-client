import React from 'react';

const FAQ = () => {
    return (
        <div className='px-8 pb-12 lg:px-36 bg-gray-200 min-h-screen'>
            <h2 className='text-center text-3xl py-3'>Interview Questions questions</h2>
            <hr className='bg-warning h-1 mx-6' />
            <div className='lg:grid grid-cols-2'>
                <div className='p-6'>
                    <h5 className='text-xl font-bold text-blue-500'>Q.1. What is CSS?</h5>
                    <p className='text-lg'><span className='font-bold'>1.Ans: </span>
                        CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be
                        displayed on screen, paper, or in other media. CSS saves a lot of work. It can
                        control the layout of multiple web pages all at once. External stylesheets are
                        stored in CSS files.
                    </p>
                </div>
                <div className='p-6'>
                    <h5 className='text-xl font-bold text-blue-500'>Q.2. Why Use CSS?</h5>
                    <p className='text-lg'><span className='font-bold'>2.Ans: </span>
                        CSS is used to define styles for your web pages, including the design,
                        layout and variations in display for different devices and screen sizes.
                        To illustrate the importance of CSS, here’s an example of a page on the
                        DevMountain site with and without CSS, a type of visual CSS tutorial, if you will.
                    </p>
                </div>
                <div className='p-6'>
                    <h5 className='text-xl font-bold text-blue-500'>Q.3. Why needed css library?</h5>
                    <p className='text-lg'><span className='font-bold'>3.Ans: </span>
                        CSS frameworks make it simple to create websites compatible with multiple browsers and
                        browser versions. This reduces the likelihood of bugs popping up during cross browser testing.
                        Since these frameworks have ready-to-use stylesheets in place, using them allows faster and more convenient web development.
                    </p>
                </div>
                <div className='p-6'>
                    <h5 className='text-xl font-bold text-blue-500'>Q.4. What is CSS Transitions & Animations?</h5>
                    <p className='text-lg'><span className='font-bold'>4.Ans: </span>
                        Explore the best WP and Web Design resources. You have questions, we have answers. Best Divi Extensions.
                        The Best Website Builder. #1 Landing Page Builder. Money-Back Guarantee. Best Divi Modules. Best Templates
                        Of 2022. Browse Hundreds Of Themes.
                    </p>
                </div>
                <div className='p-6'>
                    <h5 className='text-xl font-bold text-blue-500'>Q.5. What are the elements of the CSS Box Model? </h5>
                    <p className='text-lg'><span className='font-bold'>5.Ans: </span>
                        When laying out a document, the browser's rendering engine represents each element as a rectangular
                        box according to the standard CSS basic box model. CSS determines the size, position, and properties
                        (color, background, border size, etc.) of these boxes.
                    </p>
                </div>
                <div className='p-6'>
                    <h5 className='text-xl font-bold text-blue-500'>Q.6. How can CSS be integrated into an HTML page? </h5>
                    <p className='text-lg'><span className='font-bold'>6.Ans: </span>
                    There are three ways of integrating CSS into HTML: using style tags in the head section, using inline-styling,
                     writing CSS in a separate file, and linking into the HTML page by the link tag. 
                    </p>
                </div>

            </div>

        </div>
    );
};

export default FAQ;