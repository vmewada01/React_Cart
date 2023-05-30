import React, { useEffect, useState } from "react";
import styles from "../App.css"
const Cart = () => {
  const [data, setData] = useState([]);

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
     


    <h2>Cart Page</h2>
    
    <h3>Total Price:</h3>

    <h3 className="select-payment-mode">Select Payment Mode:</h3>
    <select className="select-payment-mode" >
      <option value="Credit Card">Credit Card</option>
      <option value="Debit Card">Debit Card</option>
      <option value="PayPal">PayPal</option>
    </select>

    <h4 className="selected-payment-mode">Selected Payment Mode: </h4>
    <button onClick={() => console.log('Proceed to Payment')}>Proceed to Payment</button>
    <br />
    <br />
  </div>


  
  );
};

export default Cart;
