import React from 'react';
import { FaUserPlus, FaClipboardList, FaWallet } from 'react-icons/fa';

function ReferralProcess({openModal}) {
    return (
        <div className="bg-blue-50 py-16" id='resources'>
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">How Do I <span className="text-blue-600">Refer?</span></h2>
                <div className="flex flex-col md:flex-row items-center justify-around">
                    <div className="flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-lg">
                        <FaUserPlus className="text-blue-600 text-5xl mb-4" />
                        <p className="text-lg">Submit referrals easily via our website’s referral section.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-lg">
                        <FaClipboardList className="text-blue-600 text-5xl mb-4" />
                        <p className="text-lg">Earn rewards once your referral joins an Accerdian program.</p>
                    </div>
                    <div className="flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-lg">
                        <FaWallet className="text-blue-600 text-5xl mb-4" />
                        <p className="text-lg">Both parties receive a bonus 30 days after program enrollment.</p>
                    </div>
                </div>
                <button
                    className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                    onClick={openModal}
                >
                    Refer Now
                </button>
            </div>
        </div>
    );
}

export default ReferralProcess;
