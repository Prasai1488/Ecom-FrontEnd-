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
// import HomeIcon from "@mui/icons-material/Home"; // New icon import
// import InfoIcon from "@mui/icons-material/Info"; // New icon import
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // New icon import
// import * as React from "react";
// import { useNavigate } from "react-router-dom";

// const drawerWidth = 240;
// const navItems = [
//   {
//     id: 1,
//     name: "Home",
//     path: "/home",
//     icon: <HomeIcon />,
//   },
//   {
//     id: 2,
//     name: "Product",
//     path: "/products",
//     icon: <ShoppingCartIcon />,
//   },
//   {
//     id: 3,
//     name: "About",
//     path: "/about",
//     icon: <InfoIcon />,
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
//       <Typography variant="h6" sx={{ my: 2, color: "primary.main" }}>
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
//               {item.icon}
//               <ListItemText primary={item.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar component="nav" sx={{ background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)" }}>
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
//                 sx={{ color: "#fff", "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" } }}
//                 onClick={() => {
//                   navigate(item.path);
//                 }}
//               >
//                 {item.icon}
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
//             "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

// export default Header;

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
// import TextField from "@mui/material/TextField"; // Importing TextField
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
//   const [searchQuery, setSearchQuery] = React.useState(""); // State for managing search input

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     console.log("Search for:", searchQuery); // You can integrate search functionality here
//     // navigate('/search-results', { state: { query: searchQuery } });
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

//   const container = window !== undefined ? () => window().document.body : undefined;

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
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" }, justifyContent: "start" }}
//           >
//             Nepal E-Mart
//           </Typography>
//           <TextField
//             variant="outlined"
//             size="small"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={handleSearchChange}
//             sx={{ flex: 1, mx: 2 }}
//             onKeyPress={(ev) => {
//               if (ev.key === 'Enter') {
//                 handleSearchSubmit(ev);
//                 ev.preventDefault();
//               }
//             }}
//           />
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
//             "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// };

// export default Header;

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField"; // Importing TextField
import HomeIcon from "@mui/icons-material/Home"; // Icon for Home
import InfoIcon from "@mui/icons-material/Info"; // Icon for About
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Icon for Products
import * as React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Product",
    path: "/products",
    icon: <ShoppingCartIcon />,
  },
  {
    id: 3,
    name: "About",
    path: "/about",
    icon: <InfoIcon />,
  },
];

const Header = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  // get user role
  const userRole = localStorage.getItem("role");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search for:", searchQuery); // You can integrate search functionality here
    // navigate('/search-results', { state: { query: searchQuery } });
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "primary.main" }}>
        Nepal E-Mart
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.icon}
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "linear-gradient(120deg, #e0c3fc 50%, #8ec5fc 100%)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "start",
            }}
          >
            Nepal E-Mart
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ mr: 2, flex: 1, maxWidth: "30%" }}
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                handleSearchSubmit(ev);
                ev.preventDefault();
              }
            }}
          />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "#fff" }}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.icon}
                {item.name}
              </Button>
            ))}

            {userRole === "buyer" && (
              <IconButton
                sx={{ color: "#fff" }}
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <Badge badgeContent={2} color="success">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            )}
          </Box>
          <Typography sx={{ margin: "0 1rem", fontWeight: "bold" }}>
            Hi, {localStorage.getItem("firstName")}
          </Typography>
          <Tooltip title="Logout">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={() => {
                navigate("/login");

                // clear local storage
                localStorage.clear();
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
