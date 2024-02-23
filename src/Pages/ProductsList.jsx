import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Loading from "../Components/Loading";
import { FaSearch } from "react-icons/fa";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();

      console.log(data);

      setProducts(data);

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loading message="Loading Data..." />
      </div>
    );
  return (
    <div className="container">
      <p className="text-2xl font-semibold mb-3">Popular Products</p>

      <div className="border outline-none overflow-hidden rounded-md flex mb-10 md:w-1/2 lg:w-2/5">
        <input
          type="text"
          placeholder="search"
          className="w-full p-2 outline-none"
        />
        <div className="py-2 px-3 bg-neutral-900 flex items-center">
          <FaSearch className="text-neutral-100" />
        </div>
      </div>
      <div className=" min-h-screen grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.length !== 0 &&
          products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default ProductsList;
