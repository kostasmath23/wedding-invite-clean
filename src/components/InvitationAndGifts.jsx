import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

const bankAccounts = [
  {
    name: 'Maria',
    bank: 'The Best Bank',
    iban: 'GR00 0123 0123 0123 0123 0123 012'
  },
  {
    name: 'George',
    bank: 'The Best Bank',
    iban: 'GR00 0456 0456 0456 0456 0456 045'
  }
];

export default function InvitationAndGifts() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (iban, index) => {
    navigator.clipboard.writeText(iban);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="bg-white py-32 px-6 md:px-12 text-gray-900 text-[1.25rem] md:text-[1.5rem]">
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">

        {/* Προσκλητήριο */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-serif mb-14">Το έντυπο προσκλητήριό μας</h2>
          <div
            className="inline-block transform transition-transform duration-500 hover:scale-105"
            style={{ animation: 'float 3s ease-in-out infinite' }}
          >
            <img
              src="/images/invite.jpg"
              alt="Προσκλητήριο"
              className="mx-auto shadow-xl rounded-lg w-72 md:w-96"
            />
          </div>
        </div>

        {/* Λίστα Γάμου */}
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-serif mb-14">Λίστα γάμου | Προαιρετικά</h2>
          <div className="space-y-10">
            {bankAccounts.map((account, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-xl text-center text-[1.25rem]">
                <p className="text-2xl font-semibold">{account.name}</p>
                <p className="text-gray-700 text-xl mt-1">{account.bank}</p>
                <p className="text-gray-900 font-mono text-xl mt-4">{account.iban}</p>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => handleCopy(account.iban, index)}
                    className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded text-lg font-semibold transition"
                  >
                    <FaRegCopy />
                    {copiedIndex === index ? 'Αντιγράφηκε!' : 'Αντιγραφή'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
