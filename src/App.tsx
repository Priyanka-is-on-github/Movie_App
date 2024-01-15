import React, { ReactNode } from "react";
import { RouterProvider } from "react-router-dom";
import { router }from './routes'
import './App.css'
import { MovieProvider } from "./context/movie-context";
 
const App:()=>ReactNode = ():ReactNode => {
  return (
    <>
    <MovieProvider>
    <RouterProvider router={router}/> 
    </MovieProvider>
      
    </>
  );
};

export default App;
