import { useEffect, useState } from 'react';
import CoffeeCard from './components/CoffeeCard';
import './App.css';

export default function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavs);
  }, []);

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter(fav => fav !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>☕ Café Caliente</h1>
      <input
        type="text"
        placeholder="Buscar café..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="cards">
        {filtered.map(item => (
          <CoffeeCard
            key={item.id}
            item={item}
            isFavorite={favorites.includes(item.id)}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
