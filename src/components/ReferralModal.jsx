import React from 'react';
import ReferralForm from './ReferralForm';

function ReferralModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        <ReferralForm />
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ReferralModal;
