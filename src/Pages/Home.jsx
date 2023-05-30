import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";

const Home = () => {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(9);
  //console.log(page);

  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      url: `https://fakestoreapi.com/products?limit=${page}`,
      method: "GET",
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }, [page]);

  const urls = [
    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1525845859779-54d477ff291f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVucyUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amV3ZWxsZXJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pYyUyMGl0ZW1zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  ];

  const update = () => {
    setIndex((prev) => (prev + 1) % urls.length);
  };

  useEffect(() => {
    const id = setInterval(update, 3000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#ff3366",
          fontFamily: "cursive",
        }}
      >
        <h1>AMAZING DEALS OF THE WEEK</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{
            borderRadius: "5px",
            boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
          width="900px"
          height="400px"
          src={urls[index]}
          alt="Sliding Image"
        />
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading && <h1>Loading......</h1>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {data.map((api_data) => {
          return (
            <div
              key={api_data.id}
              style={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "60%",
              }}
            >
              <div></div>

              <img src={api_data.image} alt="image" width="150px" />
              <h3 style={{ color: "#ff3366" }}>{api_data.category}</h3>
              {/* <h4>Price : {api_data.price} Rs</h4>
                <p>{api_data.title}</p>
                <button style={{backgroundColor:"#ff3366" , borderRadius: "5px"}}>BUY NOW</button> */}
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
        <button
          style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
          disabled={page == 18}
          onClick={() => setPage(18)}
        >
          SHOW MORE
        </button>

        <button
          style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
          disabled={page == 9}
          onClick={() => setPage(9)}
        >
          SHOW LESS
        </button>
      </div>
    </div>
  );
};

export default Home;
