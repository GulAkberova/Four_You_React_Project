import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "../pages/notfoundpage/Notfound";
import BlogDetail from "../pages/blogdetailpage/BlogDetail";
import PsxDetail from "../pages/psxdetailpage/PsxDetail";
import Contact from "../pages/contactpage/Contact";
// import RequireAuth from "./components/RequireAuth";
const Psx = lazy(() => import("../pages/psxpage/Psx"));
const Blog = lazy(() => import("../pages/blogpage/Blog"));
const Product = lazy(() => import("../pages/productpage/Product"));
const Detail = lazy(() => import("../pages/productdetail/Detail"));
const Basket = lazy(() => import("../components/basketpage/Basket"));
const LogReg = lazy(() => import("../components/login_register/LogReg"));
const Slider = lazy(() => import("../components/corousel/Slider"));
const Quiz = lazy(() => import("../components/quizpage/Quiz"));
const Seans = lazy(() => import("../components/seans/Seans"));
const Email = lazy(() => import("../pages/emailpage/Email"));
const Home = lazy(() => import("../pages/homepage/Home"));
const About = lazy(() => import("../pages/aboutpage/About"));
function AllRouter() {
  return (
    <>
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
          path="/psx/:id"
          element={
            <Suspense>
              <PsxDetail />
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
              <Email />
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
        <Route
          path="/contact"
          element={
            <Suspense>
              <Contact />
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
    </>
  );
}

export default AllRouter;
