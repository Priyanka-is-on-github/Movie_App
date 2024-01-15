import React from "react";
import { MovieDataType, moviesData } from "../../assets/data";
import { Paper, Box, Grid } from "@mui/material";
import { MovieCard } from "../movie_card";

interface MovieListProps {
  recommendList: MovieDataType[];
}
const MovieRecommendList:({ recommendList }: MovieListProps)=>JSX.Element = ({ recommendList }: MovieListProps):JSX.Element => {
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: 'scroll'}}> 
      {recommendList.map((movie:MovieDataType, index:number) => {
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

export default MovieRecommendList;
