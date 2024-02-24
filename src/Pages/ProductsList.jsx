import { useEffect, useRef, useState } from "react";
import ProductCard from "../Components/ProductCard";
import Loading from "../Components/Loading";
import { FaSearch } from "react-icons/fa";
import Header from "../Components/Header";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState("");

  const productsRef = useRef();


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();

      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const selectedPage = (pageIndex) => {
    if (pageIndex >= 1 && pageIndex <= products.length / 10) {
      setPage(pageIndex);
      productsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading)
    return (
      <div className="w-screen h-[80vh] flex justify-center items-center">
        <Loading message="Loading Data..." />
      </div>
    );

  const filterProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchData.toLowerCase())
  );
  return (
    <div className="container">
      <Header />
      <p className="text-2xl font-semibold mb-3">Popular Products</p>

      <div className="border outline-none overflow-hidden rounded-md flex mb-10 md:w-1/2 lg:w-2/5">
        <input
          type="text"
          placeholder="search"
          className="w-full p-2 outline-none"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <div className="py-2 px-3 bg-neutral-900 flex items-center">
          <FaSearch className="text-neutral-100" />
        </div>
      </div>
      <div
        ref={productsRef}
        className=" min-h-screen grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {products.length > 0 &&
          filterProducts.slice(page * 10 - 10, page * 10).map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}

        {filterProducts.length === 0 && (
          <div className="h-[20vh]">
            <p>No Product Found!</p>
          </div>
        )}
      </div>

      {products.length > 0 && (
        <div className="flex justify-end mt-4 mb-10">
          <div className="flex rounded-md border divide-x bg-neutral-50 font-normal text-neutral-500">
            <span
              className={`p-2 cursor-pointer duration-200 hover:bg-neutral-200 ${
                page > 1 ? "" : "opacity-30"
              }`}
              onClick={() => selectedPage(page - 1)}
            >
              Prev
            </span>
            {[...Array(products.length / 10)].map((_, i) => {
              return (
                <span
                  key={i}
                  className={`py-2 px-3 cursor-pointer duration-200 hover:bg-neutral-200 ${
                    page === i + 1 ? "bg-neutral-200" : ""
                  }`}
                  onClick={() => selectedPage(i + 1)}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              className={`p-2 cursor-pointer duration-200 hover:bg-neutral-200 ${
                page < products.length / 10 ? "" : "opacity-30"
              }`}
              onClick={() => selectedPage(page + 1)}
            >
              Next
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
