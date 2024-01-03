import { Products } from "../Data";
import Button from "@mui/material/Button";

const FilterButton = ({ categories, filterClick, setAll }) => {
  return (
    <>
      {
        categories.map((item) => (
          <Button variant="outlined" key={item.id} onClick={() => filterClick(item)}>
            {item}
          </Button>
        ))
      }
      <Button variant="outlined"  onClick={() => setAll(Products)}>All</Button>
    </>
  );
};

export default FilterButton;
