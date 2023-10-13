import React from 'react';
import Banner from '../HomePage/Banner/Banner.jsx';
import Chefs from '../HomePage/Chefs/Chefs.jsx';
import PopularRecipe from '../HomePage/PopularRecipe/PopularRecipe.jsx';
import Testimonial from '../Testimonial/Testimonial.jsx';

const Home = () => {
    return (
        <div className='container mx-auto px-3 sm:px-5 bg-slate-100'>
            <Banner></Banner>
            <Chefs></Chefs>
            <PopularRecipe></PopularRecipe>
            <div><Testimonial></Testimonial></div>
        </div>
    );
};

export default Home;