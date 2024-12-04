/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const data = await axios.get(url);
      setProducts(data.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="text-3xl text-red-500 font-bold">Error in fetching..</div>
    );
  }

  if (loading) {
    return <div className="text-3xl text-red-500 font-bold">Loading...</div>;
  }

  if (products.length === 0) {
    return (
      <div className="text-3xl text-red-500 font-bold">No products found</div>
    );
  }

  return (
    <div className="px-5 py-2 grid grid-cols-5 gap-2">
      {/* {loading && (
        <div className="text-3xl text-red-500 font-bold">Loading...</div>
      )} */}

      {/* {loading ? (
        <div className="text-3xl text-red-500 font-bold">Loading...</div>
      ) : null} */}

      {products.map((product) => {
        return (
          <div key={product.id} className="border-2 shadow-lg p-3">
            <img
              src={product.image}
              alt={product.title}
              className="w-[200px] h-[200px]"
            />
            <h1 className="truncate">
              <b>Title:</b> {product.title.slice(0, 25) + "..."}
            </h1>
            <p>
              <b>Price:</b> {product.price}
            </p>
            <p className="truncate">
              <b>Description:</b> {product.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Axios;