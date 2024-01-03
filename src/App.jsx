import { useState } from "react";
import { Products } from "./Data";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import FilterButton from "./components/FilterButtons";
import ProductCard from "./components/Card";
import "./App.css";

function App() {
  const [products, setProducts] = useState(Products);
  // store categories in a unique way
  const buttonCategories = [...new Set(Products.map((item) => item.category))];

  const handleFilters = (category) => {
    const filteredItems = Products.filter((item) => item.category === category);
    setProducts(filteredItems);
  };
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" mb={6}>
          Select All Filters Functionality with React{" "}
        </Typography>
        <Stack spacing={2} mb={6} direction="row" justifyContent="space-evenly">
          <FilterButton
            categories={buttonCategories}
            filterClick={handleFilters}
            setAll={setProducts}
          />
        </Stack>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {/* <Grid item xs={4} md={8}> */}
          {products.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
          {/* </Grid> */}
        </Grid>
      </Container>
    </>
  );
}

export default App;
