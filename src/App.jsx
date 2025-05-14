import { useEffect, useState } from 'react';
import CoffeeCard from './components/CoffeeCard';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const resp = await fetch('https://api.sampleapis.com/coffee/hot');
      const json = await resp.json();
      setData(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">☕ Café Caliente</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map(item => (
          <CoffeeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
