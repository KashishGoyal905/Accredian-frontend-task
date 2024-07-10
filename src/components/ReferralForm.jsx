import React, { useState } from 'react';

function ReferralForm() {
    const [formData, setFormData] = useState({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.referrerName || !formData.referrerEmail || !formData.refereeName || !formData.refereeEmail) {
            alert('Please fill in all fields.');
            return;
        }

        try {
            const response = await fetch('https://accredian-backend-task-lgv5.onrender.com/referrals', {
                // const response = await fetch('http://localhost:8000/referrals', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            console.log('Form submitted', data);

            setFormData({
                referrerName: '',
                referrerEmail: '',
                refereeName: '',
                refereeEmail: '',
            });

            alert('Referral submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the referral.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700">Your Name</label>
                <input
                    type="text"
                    name="referrerName"
                    value={formData.referrerName}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Your Email</label>
                <input
                    type="email"
                    name="referrerEmail"
                    value={formData.referrerEmail}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Friend's Name</label>
                <input
                    type="text"
                    name="refereeName"
                    value={formData.refereeName}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded w-full"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Friend's Email</label>
                <input
                    type="email"
                    name="refereeEmail"
                    value={formData.refereeEmail}
                    onChange={handleChange}
                    className="mt-1 p-2 border rounded w-full"
                    required
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Submit
            </button>
        </form>
    );
}

export default ReferralForm;
