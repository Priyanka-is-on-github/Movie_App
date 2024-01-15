import React from "react";
import { moviesData } from "../../assets/data";
import { Paper, Box, Grid } from "@mui/material";
import { MovieCard } from "../movie_card";

interface MovieListProps {
  dataList: any;
}
const MovieList = ({ dataList }: any) => {  
  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap:'wrap'}}> 
      {dataList.map((movie, index) => {
        return (
          <Grid item key={index}>
            <Paper elevation={0} sx={{ backgroundColor: "transparent" }}> 
              <MovieCard key={index} movie={movie} />
            </Paper>
          </Grid>
        );
      })}
    </Box>
  );
};

export default MovieList;
