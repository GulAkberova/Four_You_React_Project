import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import AllRouter from "./routes/AllRouter";
const Header = lazy(() => import("./layouts/header/Header"));

const Footer = lazy(() => import("./layouts/footer/Footer"));

function App() {
  
   return (
    <>
    
      <Header/>
  

      <div className="App">
       
       <AllRouter/>
      </div>
      <Footer />
    </>
  );
}

export default App;
