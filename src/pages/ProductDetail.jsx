import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { fallbackImage } from "../constants/general.constants";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import $axios from "../axios/axios.instance";
import DeleteProductDialog from "../components/DeleteProductDialog";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Box => div
// Stack => div which has display flex and direction column
const ProductDetail = () => {
  const params = useParams();
  const productId = params?.id;
  const navigate = useNavigate();

  // extract userRole from localStorage
  const userRole = localStorage.getItem("role");

  //   fetch product details
  const { isPending, data } = useQuery({
    queryKey: ["get-product-detail"],
    queryFn: async () => {
      return await $axios.get(`/product/details/${productId}`);
    },
  });

  // console.log(data);
  const productDetail = data?.data?.product;

  // ordered quantity tracking
  const [productCount, setProductCount] = useState(1);

  // add to cart api
  const { isPending: addItemToCartPending, mutate } = useMutation({
    mutationKey: ["add-item-to-cart"],
    mutationFn: async () => {
      return await $axios.post(`/add/item`, {
        productId: productId,
        orderedQuantity: productCount,
      });
    },

    onError: (error) => {
      console.log(error.response.data.message);
    },
    onSuccess: () => {
      navigate("/cart");
    },
  });

  if (isPending || addItemToCartPending) {
    return <CircularProgress />;
  }

  // if (!productDetail) {
  //   return (
  //     <Typography variant="h6" style={{ padding: "20px", textAlign: "center" }}>
  //       Product details not available.
  //     </Typography>
  //   );
  // }

  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: "18%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "3rem",
        mt: "5rem",
        width: "70%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "50%",
        }}
      >
        <img
          src={productDetail?.image || fallbackImage}
          alt=""
          style={{ width: "90%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          gap: "2rem",
        }}
      >
        <Typography variant="h5">{productDetail.name}</Typography>
        <Chip
          label={productDetail.brand}
          variant="outlined"
          color="success"
          sx={{ fontSize: "1rem" }}
        />
        <Typography sx={{ textAlign: "justify" }}>
          {productDetail.description}
        </Typography>
        <Typography variant="h6">Price: ${productDetail.price}</Typography>

        <Chip
          variant="outlined"
          color="success"
          label={productDetail.category}
          sx={{ fontSize: "1rem", textTransform: "capitalize" }}
        />

        <Typography variant="h6">
          Available quantity: {productDetail.availableQuantity}
        </Typography>

        <Stack direction="row" spacing={4}>
          <Typography variant="h6">Free shipping</Typography>
          <Chip
            variant="outlined"
            color="success"
            label={productDetail.freeShipping ? "Yes" : "No"}
            sx={{ fontSize: "1rem" }}
          />
        </Stack>

        {userRole === "seller" && (
          <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
            <Button
              variant="contained"
              color="success"
              startIcon={<EditIcon />}
              fullWidth
              onClick={() => {
                navigate(`/update/product/${productDetail._id}`);
              }}
            >
              Edit
            </Button>

            <DeleteProductDialog />
          </Stack>
        )}

        {userRole === "buyer" && (
          <>
            <Stack direction="row" spacing={3}>
              <IconButton
                onClick={() => {
                  setProductCount((prevCount) => prevCount - 1);
                }}
                disabled={productCount === 1}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="h4">{productCount}</Typography>
              <IconButton
                onClick={() => {
                  setProductCount((prevCount) => prevCount + 1);
                }}
                disabled={productCount === productDetail?.availableQuantity}
              >
                <AddIcon />
              </IconButton>
            </Stack>

            <Button
              variant="contained"
              color="success"
              onClick={() => {
                mutate();
              }}
              fullWidth
            >
              Add to cart
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetail;
