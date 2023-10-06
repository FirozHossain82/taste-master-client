import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer/Footer.jsx';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-76px)] bg-base-100 '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;