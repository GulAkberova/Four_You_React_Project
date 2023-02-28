import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './store/cartSlice'
import { AuthProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store=configureStore({
  reducer:{
    CartReducer: CartReducer
  }
})

root.render(
  <StyledEngineProvider injectFirst>
      <BrowserRouter>
     <Provider store={store}>
     <AuthProvider>
     <App />
     </AuthProvider>
     </Provider>
    </BrowserRouter>
  </StyledEngineProvider>
  
);
