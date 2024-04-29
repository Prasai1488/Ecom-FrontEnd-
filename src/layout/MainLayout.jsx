import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Headers";
import Footer from "../components/Footer";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" ,flexDirection:"column", margin:"3 rem 0"}}
      ></Box>
      <Outlet />

      <Footer />
    </>
  );
};

export default MainLayout;
