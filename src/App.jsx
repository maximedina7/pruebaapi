import { useEffect, useState } from 'react';
import CoffeeCard from './components/CoffeeCard';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(console.error);
  }, []);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>☕ Café Caliente</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Buscar café..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            width: '250px',
            fontSize: '16px'
          }}
        />
      </div>
      <div className="container">
        {filteredData.map(item => (
          <CoffeeCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
