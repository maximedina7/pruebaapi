import './CoffeeCard.css';

export default function CoffeeCard({ item, isFavorite, onToggleFavorite }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p><strong>Descripción:</strong> {item.description || 'Sin descripción.'}</p>
      <p><strong>Ingredientes:</strong> {item.ingredients?.join(', ') || 'No especificados.'}</p>
      <button onClick={onToggleFavorite}>
        {isFavorite ? '💖 Favorito' : '🤍 Agregar a Favoritos'}
      </button>
    </div>
  );
}
