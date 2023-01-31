import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/Contact" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
