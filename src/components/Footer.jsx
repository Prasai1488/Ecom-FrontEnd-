import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(120deg, #e0c3fc 50%, #8ec5fc 100%)",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        marginTop: "3rem",
      }}
    >
      <Typography variant="h5" sx={{ color: "#fff" }}>
        © 2020 Copyright: Nepal Electronic Mart
      </Typography>
    </Box>
  );
};

export default Footer;