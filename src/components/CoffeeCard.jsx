export default function CoffeeCard({ item }) {
  return (
    <div className="card">
      <img src={item.image || 'https://via.placeholder.com/300x200?text=Café'} alt={item.title} />
      <div className="card-content">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
