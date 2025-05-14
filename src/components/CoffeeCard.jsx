import './CoffeeCard.css';

export default function CoffeeCard({ item }) {
  return (
    <div className="card">
      <img src={item.image || 'https://via.placeholder.com/300x200?text=Café'} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description || 'Sin descripción disponible.'}</p>
    </div>
  );
}
