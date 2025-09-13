'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 p-4 text-white flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/formulario">Formulario</Link>
      <Link href="/Contador">Contador</Link>
      <Link href="/texto">Texto</Link>
    </nav>
  );
}
