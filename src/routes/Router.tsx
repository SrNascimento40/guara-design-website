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
        <Route element={<Contact />} path="/Contact" />
        <Route element={<About />} path="/About" />
        <Route element={<Portfolio />} path="/Portfolio" />
        <Route element={<Services />} path="/Services" />
        <Route element={<SocialMedia />} path="/SocialMedia" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
