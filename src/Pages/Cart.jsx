import React, { useEffect, useState } from "react";
import styles from "../App.css"
import { Heading } from "@chakra-ui/react";
const Cart = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0)

  useEffect(() => {
    fetch(" https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePaymentModeChange = (e) => {
   
  };

  return (
    <div style={{display: "flex",flexDirection:"column", justifyContent:"center", alignContent:"center", alignItems:"center", margin:"auto" ,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , width:"50%"}}>
     



    
    <Heading>Total Price:{price}</Heading>

    <h1  className="select-payment-mode">Select Payment Mode:</h1>
    <select className="select-payment-mode" >
      <option value="Credit Card">Credit Card</option>
      <option value="Debit Card">Debit Card</option>
      <option value="PayPal">PayPal</option>
    </select>

    <h4 className="selected-payment-mode">Selected Payment Mode: </h4>
    <button onClick={() =>console.log("payment under process") } style={{backgroundColor:"#ff3366", borderRadius:"5px"}}>Proceed to Payment</button>
    <br />
    <br />
  </div>


  
  );
};

export default Cart;
