import React from 'react';

function HeroSection({ openModal }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xl">
                <h1 className="text-4xl font-bold mb-4">Let's Learn & Earn</h1>
                <p className="text-lg mb-6">Get a chance to win up-to <span className="text-blue-600 font-bold">Rs. 15,000</span></p>
                <button
                    className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
                    onClick={openModal}
                >
                    Refer Now
                </button>
            </div>
            <div className="mt-8">
                <img src="/path/to/your/image.png" alt="Hero" className="max-w-full h-auto" />
            </div>
        </div>
    );
}

export default HeroSection;
