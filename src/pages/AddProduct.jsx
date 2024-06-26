import React from "react";
import { Formik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import $axios from "../axios/axios.instance";
import { useNavigate } from "react-router-dom";
import  addProductValidationSchema  from "../ValidationSchema/AddProductValidation";
import { productCategories } from "../constants/general.constants";


const AddProduct = () => {
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["add-product"],
    mutationFn: async (values) => {
      return await $axios.post("/add/product", values);
    },
    onSuccess: (res) => {
      navigate("/products");
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });

  if (isPending) {
    return <CircularProgress />;
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", mt: "5rem", width: "100vw" }}>
        <Formik
          initialValues={{
            image: null,
            name: "",
            brand: "",
            price: 0,
            availableQuantity: 1,
            freeShipping: false,
            category: "",
            description: "",
          }}
          validationSchema={addProductValidationSchema}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "1rem",
                gap: "1rem",
                width: "450px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
               
              }}
            >
              <Typography variant="h5">Add Product</Typography>

              <FormControl fullWidth>
                <TextField
                  label="Name"
                  {...formik.getFieldProps("name")}
                  required
                />

                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Brand"
                  {...formik.getFieldProps("brand")}
                  required
                />

                {formik.touched.brand && formik.errors.brand ? (
                  <FormHelperText error>{formik.errors.brand}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Price"
                  {...formik.getFieldProps("price")}
                  type="number"
                  required
                />

                {formik.touched.price && formik.errors.price ? (
                  <FormHelperText error>{formik.errors.price}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Quantity"
                  {...formik.getFieldProps("availableQuantity")}
                  type="number"
                  required
                />

                {formik.touched.availableQuantity &&
                formik.errors.availableQuantity ? (
                  <FormHelperText error>
                    {formik.errors.availableQuantity}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <FormControlLabel
                  control={
                    <Checkbox {...formik.getFieldProps("freeShipping")} />
                  }
                  label="Free Shipping"
                />
              </FormControl>
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select label="Category" {...formik.getFieldProps("category")}>
                  {productCategories.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>

                {formik.touched.category && formik.errors.category ? (
                  <FormHelperText error>
                    {formik.errors.category}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  required
                  multiline
                  rows={4}
                  label="Description"
                  {...formik.getFieldProps("description")}
                />
                {formik.touched.description && formik.errors.description ? (
                  <FormHelperText error>
                    {formik.errors.description}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="success"
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default AddProduct;
