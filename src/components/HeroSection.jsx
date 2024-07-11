import React from 'react';
import img from '../images/hero.png';
import img2 from '../images/image.png';
import Navbar from './Navbar';
import ReferralProcess from './ReferralProcess'; // Import the new component

function HeroSection({ openModal }) {
    return (
        <div className=''>
            <Navbar />
            <div className="h-[80vh] flex flex-col items-center bg-slate-300  p-8" id='home'>
                <div className="flex flex-row items-center justify-around bg-gradient-to-r from-blue-50 to-blue-100 border-slate-700 h-[60vh] w-[80vw] max-w-6xl mt-10 rounded-lg">
                    <img src={img2} alt="Hero" className="w-[15vw] h-[15vh] absolute left-[8rem] top-[9.4rem]" />
                    <div className="p-6 text-left">
                        <h1 className="text-5xl font-bold mb-4 leading-tight text-black">Let's Learn & Earn</h1>
                        <p className="text-xl mb-6 text-black">Get a chance to win up-to <span className="text-blue-600 font-bold">Rs. 15,000</span></p>
                        <button
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-4 align-middle"
                            onClick={openModal}
                        >
                            Refer Now
                        </button>
                    </div>
                    <div className="hidden md:block">
                        <img src={img} alt="Hero" className="w-[42vw] h-full" />
                    </div>
                </div>
            </div>
            <ReferralProcess openModal={openModal} /> {/* Add the new component here */}
            <footer className="footer bg-base-200 text-base-content p-10" id='about'>
                <aside>
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p className='text-white'>
                        <span className='text-2xl'>Accredian</span>
                        <br />
                        credentials that matter
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover" href='/'>Branding</a>
                    <a className="link link-hover" href='/'>Design</a>
                    <a className="link link-hover" href='/'>Marketing</a>
                    <a className="link link-hover" href='/'>Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a href="#home" className="link link-hover">Refer & Earn</a>
                    <a className="link link-hover" href='#hresources'>Resources</a>
                    <a className="link link-hover" href="#about">About Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover" href="/">Terms of use</a>
                    <a className="link link-hover" href="/">Privacy policy</a>
                    <a className="link link-hover" href="/">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
}

export default HeroSection;
