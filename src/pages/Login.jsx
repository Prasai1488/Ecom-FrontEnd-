import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";

import $axios from "../axios/axios.instance";
import { loginValidationSchema } from "../ValidationSchema/LoginValidaton";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["login-user"],
    mutationFn: async (values) => {
      console.log(values);
      return await $axios.post("/user/login", values);
    },
    onSuccess: (res) => {
      // console.log(res);
      navigate("/home");

      const accessToken = res?.data?.accessToken;
      const firstName = res?.data?.userDetails?.firstName;
      const role = res?.data?.userDetails.role;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("role", role);
      
    },
    onError: (error) => {
      console.log(error.response.data.message);
    },
  });

  return (
    <>
      {isPending && <LinearProgress color="secondary" />}
      <Box
      sx={{
        // Other styles if you have any
        backgroundImage: 'linear-gradient(120deg, #e0c3fc 50%, #8ec5fc 100%)',
        // Ensure the Box component fills the entire screen
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center', // This will vertically align your form in the middle
        justifyContent: 'center', // This will horizontally align your form in the middle
      }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          {(formik) => {
            return (
              <form
                onSubmit={formik.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  padding: "1rem",
                  gap: "1rem",
                  width: "400px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <Typography variant="h4" style={{ color: "black" }}>
                  Sign in
                </Typography>
                <FormControl>
                  <TextField label="Email" {...formik.getFieldProps("email")} />
                  {formik.touched.email && formik.errors.email ? (
                    <FormHelperText error>{formik.errors.email}</FormHelperText>
                  ) : null}
                </FormControl>

                <FormControl>
                  <TextField
                    label="Password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <FormHelperText error>
                      {formik.errors.password}
                    </FormHelperText>
                  ) : null}
                </FormControl>

                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={isPending}
                >
                  Login
                </Button>

                <Link to="/register">New here? Register</Link>
              </form>
            );
          }}
        </Formik>
      </Box>
    </>
  );
};

export default Login;
