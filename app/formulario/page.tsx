'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

export default function FormularioPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(
      `Nombre: ${formData.nombre}\nEmail: ${formData.email}\nMensaje: ${formData.mensaje}`
    );
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm space-y-3"
        >
          <h2 className="text-xl font-bold text-center text-indigo-600">
            Formulario
          </h2>
          <input
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <input
            name="email"
            placeholder="Correo"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white w-full py-2 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
