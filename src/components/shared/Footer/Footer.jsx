import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer className="footer p-10 md:p-20 bg-cyan-100 text-black">
                <div>
                    <h2 className='font-logo text-3xl md:text-4xl'>Taste-Master</h2>
                    <p className='mt-1'>Our mission is to provide Taste and <br />Healthy Food</p>
                </div>
                <div>
                    <span className="footer-title font-serif ">Services</span>
                    <a className="link link-hover">Cooking Food</a>
                    <a className="link link-hover">Unique Recipe Idea Generate</a>
                    <a className="link link-hover">Meal Planning</a>
                    <a className="link link-hover">Cooking Tips</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Github</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover">Mirpur1, Dhaka 1216 ,<br />Bangladesh</a>
                    <a className="link link-hover">Phone: 01637039482</a>
                    <a className="link link-hover">Email: firozhossain8076@gmail.com</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-[#81b7ea] text-black">
                <div>
                    <p className='text-lg text-black md:text-lg'>Copyright © 2023 - All right reserved by Taste-Master</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;