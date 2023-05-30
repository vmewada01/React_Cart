import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [count, setCount]= useState(0)
  const [sortvalue, SetSortValue] = useState("asc");

  const sortingFunc = (e) => {
    const ans = e.target.value;
    SetSortValue(ans);
  };
  console.log(sortvalue)

  useEffect(() => {
    axios({
      url: `https://fakestoreapi.com/products/category/jewelery?sort=${sortvalue}`,
      method: "GET",
    })
      .then((res) => {
       // console.log(res.data);
       setData(res.data)

      })
      .catch((err) => {
        // setLoading(false);
        console.log(err);
      });
  }, [sortvalue]);

  return (
    <div>
      <br />
      <div>
        <select onChange={sortingFunc} style={{ backgroundColor: "#ff3366" }}>
      
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <br />

      <div>
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
                gap: "5px",
              }}
            >
              <img src={api_data.image} alt="image" width="300px" />
              <h3>{api_data.category}</h3>
              <h4>Price : {api_data.price} Rs</h4>
              <p>{api_data.title}</p>
              <div>
              <button
              disabled={count==5}
              onClick={()=>setCount((prev)=>prev+1)}
                style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
              >
               +
              </button>
              {count}
              <button
              disabled={count==0}
              onClick={()=>setCount((prev)=>prev-1)}
                style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
              >
             -
              </button>
           
              <button
                style={{ backgroundColor: "#ff3366", borderRadius: "5px" }}
              >
                BUY NOW
              </button>
              </div>
              <br />
              <br />
            </div>
          );
        })}
       
      </div>
    </div>
  );
};

export default Products;
