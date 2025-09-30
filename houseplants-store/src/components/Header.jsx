import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);

  return (
    <header className="bg-green-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Houseplants Store</h1>
      <nav className="space-x-4">
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="hover:underline">
          Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
