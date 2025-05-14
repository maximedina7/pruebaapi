import { useEffect, useState } from 'react';
import CoffeeCard from './components/CoffeeCard';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot');
        const json = await resp.json();
        setData(json);
        setFiltered(json);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFiltered(results);
  };

  return (
    <div className="app">
      <h1>☕ Café Caliente</h1>
      <input
        type="text"
        placeholder="Buscar café..."
        value={search}
        onChange={handleSearch}
        className="search"
      />
      <div className="cards">
        {filtered.map((item) => (
          <CoffeeCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
