import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { truncateString } from "../helpers/truncateString";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 320, minHeight: 400 }} mb={4}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncateString(product.description, 135)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default ProductCard;
