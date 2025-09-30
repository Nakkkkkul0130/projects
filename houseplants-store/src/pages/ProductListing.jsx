import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent", thumbnail: "/plants/aloe.jpeg" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", thumbnail: "/plants/snake.jpeg" },
  { id: 3, name: "Fiddle Leaf Fig", price: 25, category: "Indoor", thumbnail: "/plants/fig.jpeg" },
  { id: 4, name: "Cactus", price: 8, category: "Succulent", thumbnail: "/plants/cactus.jpeg" },
  { id: 5, name: "Peace Lily", price: 20, category: "Flowering", thumbnail: "/plants/lily.jpeg" },
  { id: 6, name: "Spider Plant", price: 12, category: "Indoor", thumbnail: "/plants/spider.jpeg" },
];

const ProductListing = () => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAdded([...added, plant.id]);
  };

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {plants.map((plant) => (
        <div key={plant.id} className="border rounded p-4 flex flex-col items-center">
          <img src={plant.thumbnail} alt={plant.name} className="w-32 h-32 object-cover mb-2"/>
          <h2 className="font-bold">{plant.name}</h2>
          <p>${plant.price}</p>
          <button
            onClick={() => handleAdd(plant)}
            disabled={added.includes(plant.id)}
            className={`mt-2 px-4 py-2 rounded ${added.includes(plant.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}
          >
            {added.includes(plant.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
