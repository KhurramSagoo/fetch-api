import  { useState,useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';

const App = () => {
  const [image, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Initially set isLoading to false

  const getImage = async () => {
    setIsLoading(true); // Set isLoading to true when starting data fetching
    try {
      const res = await axios.get("https://picsum.photos/v2/list");
      const data = res.data;
      setImage(data);
    } catch (error) {
      console.log("something wrong in api");
    } finally {
      setIsLoading(false); // Set isLoading to false when data fetching is complete (success or error)
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <>
          <Loading />

      <button
        onClick={getImage}
        style={{
          padding: "15px 25px",
          backgroundColor: "green",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "200px",
          margin: "100px",
          cursor: "pointer",
          color:"white"
        }}
      >
        Click me
      </button>

      <br />
      {image.slice(11, 30).map((e, id) => {
        return (
          <img
            src={e.download_url}
            alt=""
            key={id}
            style={{
              width: "369px",
              display: "inline-block",
              padding: "20px"
            }}
          />
        );
      })}

      <div>
        {isLoading ? (
          <Loading />
          ) : (
          // Render your content when loading is complete
          image.slice(11, 30).map((e, id) => {
            return (

              <img
                src={e.download_url}
                alt=""
                key={id}
                style={{
                  width: "369px",
                  display: "inline-block",
                  padding: "20px"
                }}
              />
            );
          })
          )
        }
        

      </div>
    </>
  );
};

export default App;
