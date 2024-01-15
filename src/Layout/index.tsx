import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import SideBar from "../components/sidebar";

// interface LayoutProps {
//   children: ReactNode; 
// }
// props={ children:'home'} 

export const Layout = ({children}: {children: ReactNode; } ) => {   
  return (
    <>
    
      <Box  
        sx={{
          backgroundColor: "#10141F",  
          display: "flex",
          flexDirection: { xs: "column", lg: "row" }, 
          color: "white",
          padding: 3,
          gap: 3,           
          overflowY: "hidden",  
          height: "100vh",
        }}
      >
        <SideBar/>  
        <Box sx={{width:"100%" , overflowY:'scroll'}}>{children}</Box>  
      </Box>
      
    </>
  );
};
