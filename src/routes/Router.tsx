import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import About from "../pages/About";
import SocialMedia from "../pages/SocialMedia";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<About />} path="/about" />
        <Route element={<Portfolio />} path="/portfolio" />
        <Route element={<Services />} path="/services" />
        <Route element={<SocialMedia />} path="/social-media" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
