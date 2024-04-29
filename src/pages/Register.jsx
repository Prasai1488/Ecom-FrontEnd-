import React, { useState } from "react";
import {
  Box,
  FormControl,
  Typography,
  FormHelperText,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  LinearProgress,
} from "@mui/material";
import { Formik } from "formik";
import { registerValidationSchema } from "../ValidationSchema/RegisterValidation";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useMutation } from "@tanstack/react-query";
import $axios from "../axios/axios.instance";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () =>
    setShowPassword((prevValue) => !prevValue);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // hit register api
  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (values) => {
      return await $axios.post("/user/register", values);
    },
    onSuccess: (res) => {
      navigate("/login");
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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            role: "",
            gender: "",
          }}
          validationSchema={registerValidationSchema}
          onSubmit={(values) => {
            mutate(values);
          }}
        >
          {({ handleSubmit, getFieldProps, touched, errors }) => (
            <form
              onSubmit={handleSubmit}
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
              <Typography variant="h4" style={{color : "black"}}>Sign up</Typography>

              <FormControl>
                <TextField
                  label="First name"
                  {...getFieldProps("firstName")}
                  required
                />
                {touched.firstName && errors.firstName ? (
                  <FormHelperText error>{errors.firstName}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Last name"
                  {...getFieldProps("lastName")}
                  required
                />
                {touched.lastName && errors.lastName ? (
                  <FormHelperText error>{errors.lastName}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField label="Email" {...getFieldProps("email")} required />
                {touched.email && errors.email ? (
                  <FormHelperText error>{errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  {...getFieldProps("password")}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />

                {touched.password && errors.password ? (
                  <FormHelperText error>{errors.password}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth required>
                <InputLabel>Role</InputLabel>
                <Select label="Role" {...getFieldProps("role")}>
                  <MenuItem value="buyer">Buyer</MenuItem>
                  <MenuItem value="seller">Seller</MenuItem>
                </Select>

                {touched.role && errors.role ? (
                  <FormHelperText error>{errors.role}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select label="Gender" {...getFieldProps("gender")}>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="preferNotToSay">Prefer not to say</MenuItem>
                </Select>

                {touched.gender && errors.gender ? (
                  <FormHelperText error>{errors.gender}</FormHelperText>
                ) : null}
              </FormControl>

              <Button
                variant="contained"
                color="secondary"
                type="submit"
                sx={{ mt: "1rem" }}
              >
                Register
              </Button>

              <Link to="/login">Already registered? Login</Link>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Register;
