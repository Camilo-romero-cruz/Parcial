import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-indigo-700">Parcial Next.js</h1>
        <p className="mt-2 text-gray-600">Proyecto con 3 módulos simples.</p>
      </div>
    </div>
  );
}
