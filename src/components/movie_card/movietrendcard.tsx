import React, { ReactNode } from "react";
import { MovieContext } from "../../context/movie-context";
import { useContext } from "react";
import { Card, CardContent, Box, Grid, Stack, Typography } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkIcon from "../../pages/bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { MovieDataType } from "../../assets/data";



export const MovieTrendCard: ({ movie }: {movie:MovieDataType})=>ReactNode= ({ movie }: {movie:MovieDataType}):ReactNode => {
  const { dispatch } = useContext(MovieContext);

  const handelToggleBookmark:(id: number)=>void = (id: number):void => { 
    dispatch({ type: "TOGGLE BOOKMARK", id }); 
  };


  return (
    <Card  elevation={0} sx={{ backgroundColor: "transparent" }}>  
      <CardContent
        sx={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
          border:"3px solid red"
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} 
          alt="images"
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0,0,0,0.6)"
          borderRadius="8px"
          border="3px solid green" 
          
        /> 
        <Stack
          mt="6"
          spacing="0"
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
          border="3px solid blue" 
        >
          <Grid container alignItems="center" spacing={1} border="3px solid green" >
            <Grid item border="3px solid green" >
              <Typography
                fontSize={10}
                color="#E0E0E0"
                arial-label="Year of movie"
              >
                {movie.release_date}
              </Typography> 
              <Typography
                fontSize={10}
                color="#E0E0E0"
                arial-label="Year of movie"
              >
                {movie.first_air_date}
              </Typography>
            </Grid>

            <Grid item border="3px solid blue" > 
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#0E0E0E",
                  borderRadius: "full", 
                  border:"3px solid green" 
                }}
              />
            </Grid>

            <Grid item border="3px solid blue" >
              {movie.media_type === "movie" ? (
                <MovieCreationIcon style={{ color: "white" }} />
              ) : (
                <LiveTvIcon style={{ color: "white" }} />
              )}
            </Grid>

            <Grid item border="3px solid white" > 
              <Typography
                fontSize={10}
                color="#E0E0E0"
                arial-label="Movie catagory"
              >
                {movie.media_type}
              </Typography>
            </Grid>

            <Grid item border="3px solid white" >
              <Box
                sx={{
                  width: "1rem",
                  height: "1rem",
                  bg: "#0E0E0E",
                  borderRadius: "full",
                  border:"3px solid green" 
                }}
              />
            </Grid>

            <Grid item border="3px solid green" >
              <Typography
                fontSize={10}
                color="#E0E0E0"
                arial-label=" movie rating"
              >
                {movie.vote_average}
              </Typography>
            </Grid>

          </Grid>

          <Typography color="#E0E0E0" padding={0} arial-label=" movie title"> 
            {movie.title}
          </Typography>

          <Typography color="#E0E0E0" padding={0} arial-label=" tv title">
            {movie.name}
          </Typography>

        </Stack>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
            border:"3px solid white" 
          }}
        >
          <Box
            sx={{
              p: "1rem",
              backgroundColor: "black",
              borderRadius: "100%",
              cursor: "pointer",
              "&:hover": { opacity: 0.6 },
              border:"3px solid white" 
            }}
            onClick={() => {
              handelToggleBookmark(movie.id);  
            }}
          >
            {movie.isBookmarked? (
              <BookmarkIcon />
            ) : (
              <BookmarkBorderIcon style={{color:"white"}} />
            )}
          </Box>
        </Box>
      </CardContent>  
    </Card>
  );
};
