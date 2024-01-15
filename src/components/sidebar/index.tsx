import React, { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { Hidden } from "@mui/material";
import { Typography } from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";

type Navlinks ={
  name:string;
  icon:ReactNode;
  link:string;
} 
const navLinks: Navlinks[] = [ 
  {
    name: "Home",
    icon: <WindowRoundedIcon />, 
    link: "/",
  },
  {
    name: "Movies",
    icon: <MovieCreationIcon />,
    link: "/movies",
  },
  {
    name: "Tv-series",
    icon: <LiveTvIcon />,
    link: "/tv-series",
  },
  {
    name: "Bookmark",
    icon: <BookmarkRoundedIcon />,
    link: "/bookmark",
  },
];

const SideBar:()=>ReactNode = ():ReactNode => {
  const { pathname } = useLocation();
  

  
  return (
    <>
      <div>
        <Box
          sx={{
            backgroundColor: "#161d2f",
            padding: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            alignItems: "center",
            justifyContent: "space-between",
            width: {
              sm: "100%",
              lg: 200,
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "row",
                lg: "column",
              },

              gap: 5,

              alignItems: {
                xs: "center",
                lg: "start",
              },
              width: "100%",
            }}
          >
            <Hidden smDown>
              <Typography
                variant="h5"
                component="h1"
                my={2}
                fontWeight={400}
                fontSize={18}
              >
                MoviesApp
              </Typography>
            </Hidden>

            <Box
              sx={{
                py: {
                  xs: "0px",
                  lg: "16px",
                },
                display: "flex",
                flexDirection: {
                  xs: "row",
                  lg: "column",
                },
                gap: 4,
              }}
            >
              {navLinks.map((item:Navlinks):ReactNode=>(   
                <Link 
                  key={item.name}
                  to={item.link}
                  style={{ textDecoration: "none" }}  
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,

                      textDecoration: "none",
                    }}
                    id={item.name}
                    className={`boxcontainer ${pathname === item.link ? 'active' : ''}`}
                  >
                    
                    {item.icon}

                    <Hidden mdDown>
                      <Typography>{item.name}</Typography>
                    </Hidden>
                  </Box>
                </Link>
               
                

              ))}
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default SideBar;
