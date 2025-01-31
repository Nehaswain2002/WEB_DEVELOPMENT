/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Memes = () => {
  const url = "https://meme-api.com/gimme/wholesomememes";
  const [meme, setMeme] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const notify = () => toast(error);

  const fetchMemes = async () => {
    try {
      const response = await axios.get(url);
      setMeme(response.data);
      setLoading(false);
    } catch (error) {
      if (error) {
        setError(error.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  return (
    <div>
      <ToastContainer />
      {loading && (
        <div className="text-3xl font-bold text-red-500 text-center">
          Loading...
        </div>
      )}
      {error && (
        <div className="text-3xl font-bold text-red-500 text-center">
          {notify()}
        </div>
      )}
      <div className="border-2 w-[550px] mx-auto flex flex-col justify-center items-center mt-5">
        <h1 className="text-2xl font-bold p-2">Title: {meme.title}</h1>
        <div className="border-2 w-[500px]">
          <img className="w-full h-[500px]" src={meme.url} alt={meme.title} />
        </div>
        <p className="font-bold">Author: {meme.author}</p>
        <p className="font-bold ">Votes: {meme.ups}</p>
      </div>
    </div>
  );
};

export default Memes;