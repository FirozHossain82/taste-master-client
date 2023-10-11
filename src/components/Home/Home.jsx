import React from 'react';
import Banner from '../HomePage/Banner/Banner.jsx';
import Chefs from '../HomePage/Chefs/Chefs.jsx';

const Home = () => {
    return (
        <div className='container mx-auto px-3 sm:px-5 bg-slate-100'>
            <Banner></Banner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;