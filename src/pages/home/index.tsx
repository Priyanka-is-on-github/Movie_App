import React, { ReactNode, SetStateAction, useContext } from "react";
import { Layout } from "../../Layout";
import { Box, InputAdornment, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { InputBase } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MovieTrendList from "../../components/movie-list/movieTrendlist";
// import { MovieDataType } from "../../assets/recommend_data";
import { MovieContext } from "../../context/movie-context";
// import { trendingData } from "../../assets/trending_data";
import { moviesData } from "../../assets/data";
import MovieRecommendList from "../../components/movie-list/movieRecommendlist";
import { MovieDataType } from "../../assets/data";

const Home:()=>ReactNode = ():ReactNode => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);

  const { state } = useContext(MovieContext);
  const { movies } = state;

  const handelSearch:(e: { target: { value: string } })=>void = (e: { target: { value: string } }):void => {
    const searchTerm:string = e.target.value;
    setSearch(searchTerm);

  

    const newList:MovieDataType[] = movies[0].results.filter((movie:MovieDataType):boolean|void => {
      if (movie.media_type === "tv") {
        return movie.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else if (movie.media_type === "movie") {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });

    setSearchList(newList);
  };



  const trendingList:MovieDataType[] = movies[0].results.filter((item:MovieDataType):boolean => {
    return item.isTrending === true;
  });


  const recommendList:MovieDataType[] = movies[0].results.filter((item:MovieDataType):boolean => {
    return item.isTrending !== true;
  });

  

  return (
    <>
      <Layout>
        <Box>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "default",
              p: 1,
              backgroundColor: "#10141f",
              border: "none",
            }}
          >
            <InputBase
              placeholder="Search for movies and TV-series"
              sx={{
                ml: 1,
                flex: 1,
                color: "white",
                border: "none",
              }}
              value={search}
              onChange={handelSearch}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              }
            />
          </Paper>
        </Box>

        <Box py={2} px={4}>
          {search === "" ? (
            <Box width="100%">
              <Box width="100%">
                <Typography variant="h5" component="h1" my={6} fontWeight={400}> 
                  Trending
                </Typography>
                <MovieTrendList trendingList={trendingList} /> 
              </Box>

              <Box width="100%">
                <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                  Recommended For You
                </Typography>
                <MovieRecommendList recommendList={recommendList} />
              </Box>
            </Box>
          ) : (
            <Box width="100%">
              <Typography>
                Found {searchList.length} results for "{search}" {""}
              </Typography>
              <MovieRecommendList recommendList={searchList}></MovieRecommendList>
            </Box>
          )}
        </Box>
      </Layout>
    </>
  );
};

export default Home;
