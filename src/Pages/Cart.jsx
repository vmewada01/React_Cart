import React, { useContext, useEffect, useState } from "react";
import styles from "../App.css"
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext";
const Cart = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0)
  const {cart} = useContext(CartContext)

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
    <Box>
    <div style={{display: "flex",flexDirection:"column", justifyContent:"center", alignContent:"center", alignItems:"center", margin:"auto" ,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" , width:"50%"}}>
     



    
    <Heading>Total Price:{cart.price} Rs</Heading>

    <h1  className="select-payment-mode">Select Payment Mode:</h1>
    <select className="select-payment-mode" >
      <option value="Credit Card">Credit Card</option>
      <option value="Debit Card">Debit Card</option>
      <option value="PayPal">PayPal</option>
    </select>

    <h4 className="selected-payment-mode">Selected Payment Mode: </h4>
    <button onClick={() => alert("Payment Under Process") } style={{backgroundColor:"#ff3366", borderRadius:"5px"}}>Proceed to Payment</button>
    <br />
    <br />
 
  </div>
  <Flex alignItems='center' margin='auto' direction='column' display='flex' justifyContent='center'>
  <Box >
    <img src={cart.url} alt="img" width='300px' /></Box>
      <Box><Text >Amount to pay: {cart.price} Rs</Text></Box>
  </Flex>

  </Box>
  
  );
};

export default Cart;
