export default function CoffeeCard({ item }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 max-w-xs">
      <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-2">{item.title}</h2>
      <p className="text-gray-700 text-sm mt-1">{item.description}</p>
      <p className="mt-2 text-green-600 font-semibold">${item.price}</p>
    </div>
  );
}
