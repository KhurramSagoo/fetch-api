# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React + Vite

import React, { useState, useEffect } from "react";
import Header from "@/Componets/Header";
import axios from "axios";
const page = () => {
  const logo ={
      logo: "Developer",
      logoicon: <i class="bi bi-code"></i>
    };


  useEffect(() => {
    getImage();
  }, []);

  const [Imagedata, setImageData] = useState([]);
  const getImage = async () => {
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      const data = await res.data;
      setImageData(data);
      // console.log(Imagedata);
    } catch (error) {
      console.log("Data Not Show");
    }
  };
  return (
    <>
      <Header 
          data = {...logo}
      />
      <button
        className="py-5 px-5 bg-green-500 text-white mt-2 block"
        onClick={getImage}
      >
        Get Image
      </button>

      {Imagedata.map((ele, i) => {
        return (
          <img
            key={i}
            src={ele.download_url}
            width={300}
            height={300}
            className="inline-block m-10 rounded"
          />
        );
      })}
    </>
  );
};

export default page;