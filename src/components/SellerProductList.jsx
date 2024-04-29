import React from "react";
import { useQuery } from "@tanstack/react-query";
import $axios from "../axios/axios.instance";
import ProductCard from "./ProductCard";
import { Box, CircularProgress, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SellProductPrompt from "./SellProductPrompt";

const SellerProductList = () => {
  const navigate = useNavigate();

  const { isPending, data } = useQuery({
    queryKey: ["get-seller-products"],
    queryFn: async () => {
      return await $axios.post("/product/list/seller", {
        page: 1,
        limit: 20,
      });
    },
  });

  const productList = data?.data?.productList;

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          navigate("/add-product");
        }}
        sx={{
          position: 'relative', // Ensure the button is positioned relative to its parent
          zIndex: 1000, // High index to keep it above other content
          marginBottom: "2rem",
          marginTop: "6rem",
          marginLeft: "auto", // To auto-adjust horizontally
          marginRight: "auto", // To auto-adjust horizontally
          display: "block",
          width: "fit-content",
        }}
      >
        Add product
      </Button>

      {productList.length === 0 && <SellProductPrompt />}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          padding: "2rem",
          marginTop: "6rem", // Make sure this is more than the button's marginTop plus its height
          width: "100vw",
          
       
        }}
      >
        {productList.map((item) => {
          return <ProductCard key={item._id} {...item} />;
        })}
      </Box>
    </>
  );
};

export default SellerProductList;
