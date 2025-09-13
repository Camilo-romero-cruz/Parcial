'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function Modulo3Page() {
  const [mensaje, setMensaje] = useState(
    'Este es un módulo con contenido estático.'
  );

  const cambiarMensaje = () => {
    setMensaje('Ahora el texto cambió gracias al botón 🚀');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">
            Texto dinámico
          </h2>
          <p className="text-gray-600 mb-4">{mensaje}</p>
          <button
            onClick={cambiarMensaje}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Cambiar mensaje
          </button>
        </div>
      </div>
    </div>
  );
}
