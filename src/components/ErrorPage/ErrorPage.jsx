import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <section className='container mx-auto p-10 h-[100vh] flex items-center'>
            <div className='max-w-md  mx-auto text-center'>
                    <div className='flex flex-col items-center'>
                        <img 
                        className='w-[300] sm:w-[450px]'
                         src="https://i.ibb.co/rxkCnxJ/Error-Page-Main.jpg" alt="" />
                    </div>
                    <p className='text-2xl text-sky-600 font-semibold md:text-3xl mx-auto my-10'>
                       {status || 404} {error?.message}
                    </p>
                    <div>
                        <Link to='/'
                        className="px-8 py-3 font-semibold rounded bg-cyan-600 hover:bg-gray-700 text-white"
                        >
                            Back to homepage
                        </Link>
                    </div>
            </div>
        </section>
    );
};

export default ErrorPage