// import React from "react";
// import {
//   Box,
//   FormControl,
//   TextField,
//   Typography,
//   FormHelperText,
//   Button,
// } from "@mui/material";
// import { Formik } from "formik";
// import { loginValidationSchema } from "../ValidationSchema/LoginValidaton";

// const Login = () => {
//   return (
//     <Box>
//       <Typography variant="h3">Sign in</Typography>
//       <Formik
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         validationSchema={loginValidationSchema}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {(formik) => {
//           return (
//             <form onSubmit={formik.handleSubmit}>
//               <FormControl>
//                 <TextField label="Email" {...formik.getFieldProps("email")} />
//                 {formik.touched.email && formik.errors.email ? (
//                   <FormHelperText error>{formik.errors.email}</FormHelperText>
//                 ) : null}
//               </FormControl>

//               <FormControl>
//                 <TextField
//                   label="Password"
//                   {...formik.getFieldProps("password")}
//                 />
//                 {formik.touched.password && formik.errors.password ? (
//                   <FormHelperText error>
//                     {formik.errors.password}
//                   </FormHelperText>
//                 ) : null}
//               </FormControl>
//               <Button variant="outlined">Log In</Button>
//             </form>
//           );
//         }}
//       </Formik>
//     </Box>
//   );
// };

// export default Login;


// import MenuIcon from "@mui/icons-material/Menu";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import * as React from "react";
// import { useNavigate } from "react-router-dom";

// const drawerWidth = 240;
// const navItems = [
//   {
//     id: 1,
//     name: "Home",
//     path: "/home",
//   },

//   {
//     id: 2,
//     name: "Product",
//     path: "/products",
//   },
//   {
//     id: 3,
//     name: "About",
//     path: "/about",
//   },
// ];

// const Header = (props) => {
//   const navigate = useNavigate();
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         Nepal E-Mart
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.id} disablePadding>
//             <ListItemButton
//               sx={{ textAlign: "center" }}
//               onClick={() => {
//                 navigate(item.path);
//               }}
//             >
//               <ListItemText primary={item.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container =
//     window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar component="nav">
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             Nepal E-Mart
//           </Typography>
//           <Box sx={{ display: { xs: "none", sm: "block" } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.id}
//                 sx={{ color: "#fff" }}
//                 onClick={() => {
//                   navigate(item.path);
//                 }}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: "block", sm: "none" },
//             "& .MuiDrawer-paper": {
//               boxSizing: "border-box",
//               width: drawerWidth,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

// export default Header;