import React, { ReactNode } from "react";
import { MovieContext } from "../../context/movie-context";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { useContext } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { MovieDataType } from "../../assets/data";

export const MovieCard:({ movie }: {movie:MovieDataType})=>ReactNode = ({ movie }: {movie:MovieDataType}):ReactNode => {

    const { dispatch } = useContext(MovieContext); 

    const handelToggleBookmark:(id:number)=>void = (id:number):void => {  
      dispatch({ type: "TOGGLE BOOKMARK", id }); 
      
    };
 
  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "transparent", color: "#E0E0E0", my: 3 ,width:'300px', border:'none', cursor:"pointer" , transition:' transform 300ms linear' }} 
      className="cards">
      <CardContent sx={{ p: 1, position: "relative" }}>  
        <Grid container spacing={1}  >
          <Grid item >
            <img
              src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} 
              alt="images"
              style={{ width: "300px", height: "100%", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
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

              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>

              <Grid item>
                {movie.media_type === "movie" ? (
                  <MovieCreationIcon style={{ color: "white" }} />
                ) : (
                  <LiveTvIcon style={{ color: "white" }} />
                )}
              </Grid>

              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  arial-label="Movie catagory"
                >
                  {movie.media_type}
                </Typography>
              </Grid>

              <Grid item>
                <Box
                  sx={{
                    width: "4px",
                    height: "4px",
                    background: "#BDBDBD",
                    borderRadius: "50%",
                  }}
                />
              </Grid>

              <Grid item>
                <Typography
                  fontSize={10}
                  color="#E0E0E0"
                  arial-label=" movie rating"
                >
                  {movie.vote_average}
                </Typography>
              </Grid>

              
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "16px",
                }}
              >
                <Box
                  sx={{
                    p: "1rem",
                    backgroundColor: "black",
                    borderRadius: "100%",
                    cursor: "pointer",
                    "&:hover": { opacity: 0.8 },
                  }}
                  onClick={() => {
                    handelToggleBookmark(movie.id);  
                   
                  }}
                >
                  {movie.isBookmarked ? (
                   <BookmarkIcon/>
                  ) : (
                    <BookmarkBorderIcon/>
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
                <Typography
                  color="#E0E0E0"
                  padding={0}
                  arial-label=" movie title" 
                >
                  {movie.title}
                </Typography>

                <Typography
                  color="#E0E0E0"
                  padding={0}
                  arial-label=" tv title"
                >
                  {movie.name}
                </Typography>
              </Grid>


      </CardContent>
    </Card>
  );
};
