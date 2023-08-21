
import React, { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
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
      <button
        // className="py-5 px-5 bg-green-500 text-white mt-2 block"
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
            // className="inline-block m-10 rounded"
          />
        );
      })}
    </>
  );
};

export default App;