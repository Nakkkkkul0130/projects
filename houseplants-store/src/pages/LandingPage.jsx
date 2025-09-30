import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[url('/plant_bg.jpg')] bg-cover text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Houseplants Store</h1>
      <p className="text-xl mb-6 text-center max-w-xl">
        We bring nature closer to you! Explore our unique collection of houseplants.
      </p>
      <Link to="/products" className="bg-green-700 px-6 py-3 rounded hover:bg-green-800">
        Get Started
      </Link>
    </div>
  );
};

export default LandingPage;
