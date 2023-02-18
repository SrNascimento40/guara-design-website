import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Header from "../components/Header";
import Books from "../pages/Books";
import EspiritBooks from "../pages/EspiritBooks";
import Partnership from "../pages/Partnership";
import Contact from "../pages/Contact";
import Post from "../pages/post";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/sobre" />
        <Route element={<Books />} path="/livros" />
        <Route element={<EspiritBooks />} path="/ee" />
        <Route element={<Partnership />} path="/parceiros" />
        <Route element={<Contact />} path="/contato" />
        <Route element={<Post />} path="/post/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
