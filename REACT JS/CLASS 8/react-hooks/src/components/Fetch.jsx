/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Fetch = () => {
  const url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [seconds, setSeconds] = useState(5);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
    const timer = setInterval(() => {
      if (seconds <= 1) {
        clearInterval(timer);
      }
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (error) {
    return (
      <div className="flex justify-center text-3xl">
        Error in fetching products: {error}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex justify-center text-3xl">Loading...{seconds}</div>
    );
  }

  return (
    <div className="px-5 py-2 grid grid-cols-5 gap-2">
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

export default Fetch;