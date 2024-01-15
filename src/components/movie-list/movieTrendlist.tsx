import React from "react";
import { Box, Grid } from "@mui/material";
import{ Paper }from "@mui/material";
import { MovieTrendCard } from "../movie_card/movietrendcard";
import { MovieDataType } from "../../assets/data";


 
interface MovieTrendListProps{
    trendingList:MovieDataType[];

}
const MovieTrendList:({trendingList} : MovieTrendListProps)=>JSX.Element = ({trendingList} : MovieTrendListProps):JSX.Element => {   
  return (
    <Box sx={{display:'flex',
    gap:2,
    overflowX:'scroll'
  }}>
    {trendingList.map((movie:MovieDataType , index:number)=>{ 
     
     return(<Grid  item key={index}>
      <Paper elevation={0}  sx={{backgroundColor:"transparent"}}>  
        <MovieTrendCard  key={index} movie={movie}/> 
      </Paper>
     </Grid>)
    })}
  </Box>
  )
};

export default MovieTrendList;
