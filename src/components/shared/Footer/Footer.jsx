import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
           <footer className="footer p-10 md:p-20 bg-cyan-100 text-black">
                <div>
                    <h2 className='font-semibold font-serif text-black text-4xl md:text-4xl'>Taste-Master</h2>
                    <p className='mt-1 text-sm'>Our mission is to provide Taste and <br />Healthy Food</p>
                </div>
                <div>
                    <span className="footer-title font-serif text-lg ">Services</span>
                    <a className="link link-hover text-base ">Cooking Food</a>
                    <a className="link link-hover text-base">Unique Recipe Idea Generate</a>
                    <a className="link link-hover text-base">Meal Planning</a>
                    <a className="link link-hover text-base">Cooking Tips</a>
                </div>
                <div>
                    <span className="footer-title text-lg">Explore</span>
                    <Link to='/' className="link link-hover text-base">Home</Link>
                    <Link to='/blog' className="link link-hover text-base">Blog</Link>
                    <Link to='/about' className="link link-hover text-base">About Us</Link>
                    <Link to='/contact' className="link link-hover text-base">Contact</Link>
                </div>
                <div>
                    <span className="footer-title text-lg">Address</span>         
                    <a className="link link-hover text-base ">Mirpur1, Dhaka 1216 ,<br />Bangladesh</a>
                    <a className="link link-hover text-base">Phone: 01637039482</a>
                    <a className="link link-hover text-base">Email: firozhossain8076@gmail.com</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-[#81b7ea] text-black">
                <div>
                    <p className='text-lg text-black font-bold md:text-lg'>Copyright © 2023 - All right reserved by Taste-Master</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;