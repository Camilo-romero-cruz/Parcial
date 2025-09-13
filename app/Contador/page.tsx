'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Modulo2Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-indigo-700">Contador</h2>
        <p className="mt-2 text-gray-600">Clics: {count}</p>
        <button
          onClick={() => setCount(count + 1)}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Sumar +1
        </button>
      </div>
    </div>
  );
}
