import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/Blog" />
        <Route element={<About />} path="/about" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
