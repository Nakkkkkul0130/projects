import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../store/cartSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, totalItems, totalCost } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between border p-4 my-2">
          <img src={item.thumbnail} alt={item.name} className="w-20 h-20 object-cover"/>
          <div className="flex-1 mx-4">
            <h2 className="font-bold">{item.name}</h2>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <button onClick={() => dispatch(increment(item.id))} className="bg-green-500 px-2 py-1 rounded text-white">+</button>
            <button onClick={() => dispatch(decrement(item.id))} className="bg-yellow-500 px-2 py-1 rounded text-white">-</button>
            <button onClick={() => dispatch(removeItem(item.id))} className="bg-red-500 px-2 py-1 rounded text-white">Delete</button>
          </div>
        </div>
      ))}

      <div className="mt-4 space-x-2">
        <button className="bg-blue-500 px-4 py-2 rounded text-white">Checkout (Coming Soon)</button>
        <Link to="/products" className="bg-gray-500 px-4 py-2 rounded text-white">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default CartPage;
