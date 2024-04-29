import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fallbackImage } from "../constants/general.constants";
import DeleteProductDialog from "./DeleteProductDialog";

const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: "25%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", display:"flex", flexDirection:"column",minHeight:"600px" }}>
      <CardMedia
        sx={{
          height: "250px",
          width: "100%",
          cursor: "pointer",
          objectFit: "cover",
        }}
        image={props?.image || fallbackImage}
        title={props.name}
        onClick={() => {
          navigate(`/product/details/${props._id}`);
        }}
      />
      <CardContent sx={{flexGrow:1,minHeight:"150px",overflow:"hidden"}}>
        <Stack direction="row" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>

          <Chip label={props.brand} color="secondary" variant="outlined" />
        </Stack>

        <Typography>Price:${props.price}</Typography>

        <Typography variant="body2" color="text.secondary">
          {props.description}...
        </Typography>
      </CardContent>
      <CardActions sx={{mt:"auto"}}>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={() => {
            navigate(`/product/details/${props._id}`);
          }}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;


