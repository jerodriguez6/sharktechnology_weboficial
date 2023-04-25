import Login from "pages/Login/login";
import Register from "pages/Login/register";
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/****site route*****/
//  Home page
const Home = lazy(() => import("./pages"));
const NotFound = lazy(() => import("./pages/404"));
const Mint = lazy(() => import("./pages/Mint"));
const Saved = lazy(() => import("./pages/Saved"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogEdit = lazy(() => import("./pages/Blog/blogEdit"));

const loader = (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div className="reverse-spinner" />
  </div>
);

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={loader}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/editarblog/:idblog" element={<BlogEdit />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;