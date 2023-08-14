import FilmCard from "./FilmCard";
import FilmTable from "./FilmTable";
import Box from "@mui/material/Box";

export default function Films() {
  // axios call

  return (
    <Box>
      <FilmCard />
      <FilmTable />
    </Box>
  );
}
