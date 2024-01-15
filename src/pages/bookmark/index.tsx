import React, { ReactNode } from "react";
import { moviesData } from "../../assets/data";
import { Paper } from "@mui/material";
import { Layout } from "../../Layout";
import { Box, InputAdornment, Typography } from "@mui/material";
import { InputBase } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MovieList from "../../components/movie-list";
import { MovieContext } from "../../context/movie-context";
import { SetStateAction, useContext } from "react";
import { MovieDataType } from "../../assets/data";

const Bookmark:()=>ReactNode = ():ReactNode => {  
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);

  const { state } = useContext(MovieContext);
  const { movies } = state;

  let bookmarkData:MovieDataType[] = movies[0].results.filter((item:MovieDataType):boolean=>{

    return item.isBookmarked
    
   

  })

 


  const handelSearch:(e: { target: { value: string }})=>void = (e: { target: { value: string } }):void => {
    const searchTerm:string = e.target.value;
    setSearch(searchTerm);

    const newList:MovieDataType[] = bookmarkData.filter((movie:MovieDataType):boolean => { 
      
      if(movie.media_type === 'tv'){

      
      
        return movie.name.toLowerCase().includes(searchTerm.toLowerCase()); 
      }
      else{
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      }
     
    });

    setSearchList(newList);
  };

  return (
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
                Bookmark
              </Typography>
              <MovieList dataList={bookmarkData} /> 
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}" {""} 
            </Typography>
            <MovieList dataList={searchList}></MovieList>
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Bookmark;
