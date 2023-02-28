import "./App.css";
import React, { lazy, Suspense, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Notfound from "./components/notfoundpage/Notfound";
import BlogDetail from "./components/detailpage/BlogDetail";
import RequireAuth from "./components/RequireAuth";
const Header = lazy(() => import("./layouts/header/Header"));
const Home = lazy(() => import("./components/homepage/Home"));
const About = lazy(() => import("./components/aboutpage/About"));
const Footer = lazy(() => import("./layouts/footer/Footer"));
const Psx = lazy(() => import("./components/psxpage/Psx"));
const Blog = lazy(() => import("./components/blogpage/Blog"));
const Product = lazy(() => import("./components/mehsulpage/Product"));
const Detail = lazy(() => import("./components/detailpage/Detail"));
const Basket = lazy(() => import("./components/basketpage/Basket"));
const LogReg = lazy(() => import("./components/login_register/LogReg"));
const Slider = lazy(() => import("./components/corousel/Slider"));
const Quiz = lazy(() => import("./components/quizpage/Quiz"));
const Seans = lazy(() => import("./components/seans/Seans"));
const Email = lazy(() => import("./components/emailpage/Email"));
function App() {
  
   return (
    <>
    
      <Header/>
  

      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home />
              </Suspense>
            }
          />

          <Route path="*" element={<Notfound />}></Route>
          <Route
            path="/psx"
            element={
              <Suspense>
                <Psx />
              </Suspense>
            }
          ></Route>
          <Route
            path="/blog"
            element={
              <Suspense>
                <Blog />
              </Suspense>
            }
          ></Route>
          <Route
            path="/product"
            element={
              <Suspense>
                <Product />
              </Suspense>
            }
          ></Route>
           <Route
            path="/blog/:id"
            element={
              <Suspense>
                <BlogDetail />
              </Suspense>
            }
          ></Route>
          <Route
            path="/product/:id"
            element={
              <Suspense>
                <Detail />
              </Suspense>
            }
          ></Route>
          <Route
            path="/basket"
            element={
              <Suspense>
                <Basket />
              </Suspense>
            }
          ></Route>
          <Route
            path="/logreg"
            element={
              <Suspense>
                <LogReg />
              </Suspense>
            }
          ></Route>
          <Route
            path="/email"
            element={
              <Suspense>
              
                <Email/>
              </Suspense>
            }
          ></Route>
          <Route
            path="/quiz"
            element={
              <Suspense>
                <Quiz />
              </Suspense>
            }
          ></Route>
          <Route
            path="/seans"
            element={
              <Suspense>
                <Seans />
              </Suspense>
            }
          ></Route>
          {/* <Route element={<RequireAuth/>}> */}
          <Route
            path="/about"
            element={
              <Suspense>
                <About />
              </Suspense>
            }
          />


          {/* </Route> */}
          {/* <Route
            path="/test"
            element={
              <Suspense>
                <Test />
              </Suspense>
            }
          ></Route> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
