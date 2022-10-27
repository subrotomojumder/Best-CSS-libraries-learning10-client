import React from 'react';

const Blog = () => {
    return (
        <div className='px-8 pb-12 lg:px-36 bg-orange-100 min-h-screen'>
            <h2 className='text-center text-3xl py-3'>Question and Answer</h2>
            <hr className='bg-warning h-1 mx-6' />
            <div>
                <h5 className='text-xl font-bold text-yellow-700 mt-5'>Q.1. What is cors?</h5>
                <p className='text-lg'><span className='font-bold'>1.Ans: </span>Cross-Origin Resource Sharing (CORS) হল একটি HTTP-Header ভিত্তিক mechanism
                    যা একটি সার্ভারকে তার নিজস্ব ব্যতীত অন্য কোন উৎস (domain, scheme, or port) নির্দেশ করতে দেয় যেখান থেকে একটি Browser রিসোর্স লোড করার অনুমতি দেয়।
                    CORS একটি নোড। একটি Connect/Express middleware প্রদানের জন্য js প্যাকেজ যা various options গুলির সাথে সক্ষম করতে CORS ব্যবহার করা যায় ।
                    CORS এমন একটি পদ্ধতির উপরও নির্ভর করে যার মাধ্যমে Browser গুলি  Cross Origin Resource হোস্ট করা সার্ভারের কাছে একটি "Preflight" request করে,
                    যাতে সার্ভার actual request এ অনুমতি দেবে কিনা তা পরীক্ষা করে। cors Access-Control-Origin header গুলিকে bypassingকরে , যা নির্দিষ্ট করে যে কোন
                    Resource API অ্যাক্সেস করতে পারে৷
                </p>

                <h5 className='text-xl font-bold text-yellow-700 mt-5'>Q.2. Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p className='text-lg'><span className='font-bold'>2.Ans: </span>
                    Firebase Realtime Database সরাসরি client-side থেকে ডাটাবেসে নিরাপদ access অনুমতি দিয়ে rich, collaborative applications তৈরি করতে দেয়। Data is persisted locally,
                    and even while offline, realtime events continue to fire, giving the end user a responsive experience । প্রকৃতপক্ষে, dynamic application এর  জন্য full-fledged backend code
                    লেখার একটি কম প্রযুক্তিগত এবং সময় সাশ্রয়ী বিকল্প।
                    <br />
                    Firebase ছাড়া authentication implement এর জন্য alternative option গুলি : 1. Auth0, 2. MongoDB, 3. Passport, 4. Okta ।
                </p>

                <h5 className='text-xl font-bold text-yellow-700 mt-5'>Q.3. How does the private route work?</h5>
                <p className='text-lg'><span className='font-bold'>3.Ans: </span>
                    রিঅ্যাক্ট রাউটারে private root (যাকে সুরক্ষিত রুটও বলা হয়) এর জন্য একজন user একটি root দেখার জন্য অনুমোদিত হতে হবে।
                    সুতরাং যদি একজন ব্যবহারকারী একটি নির্দিষ্ট page এর জন্য অনুমোদিত না হয় তবে তারা এটিতে access করতে পারবে না। সবচেয়ে সাধারণ
                    উদাহরণ হল একটি React application app যেখানে একজন ব্যবহারকারী শুধুমাত্র সুরক্ষিত পৃষ্ঠাগুলি অ্যাক্সেস করতে পারে যখন তারা
                    অনুমোদিত হয় । অনুমোদন যদিও প্রমাণীকরণের বাইরে যায়। উদাহরণস্বরূপ,অ্যাপ্লিকেশনের ভূমিকা এবং অনুমতি থাকতে পারে যা ব্যবহারকারীকে
                    নির্দিষ্ট এলাকায় অ্যাক্সেস দেয়। Private route component একমাত্র URL এবং Authentication condition পুনঃনির্দেশ করে । যদি ব্যবহারকারী প্রমাণীকৃত
                    না হয় তবে তাকে login পৃষ্ঠায় পুনঃনির্দেশিত করা হবে এবং ব্যবহারকারী শুধুমাত্র প্রমাণীকৃত routes access করতে পারবে । যদি
                    সে প্রমাণীকৃত হয়
                </p>
                <h5 className='text-xl font-bold text-yellow-700 mt-5'>Q.4. What is Node? How does Node work?</h5>
                <p className='text-lg'><span className='font-bold'>4.Ans: </span>
                    Node.js is an open source server environment . Node.js is free. Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).
                    Node.js uses JavaScript on the server.

                    while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use
                    the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide
                    the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single
                    thread without blocking it for one request.
                    <br />
                    Node.js basically works on two concept

                    1. Asynchronous
                    2. Non-blocking I/O
                </p>
            </div>

        </div>
    );
};

export default Blog;