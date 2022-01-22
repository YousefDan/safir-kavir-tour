import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Packages from "./pages/packages/Packages";
import Gallery from "./pages/gallery/Gallery";
import Blog from "./pages/blog/Blog";
import ContactUs from "./pages/contact-us/ContactUs";
import AboutUs from "./pages/about-us/AboutUs";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePackage from "./pages/packages/SinglePackage";

const App = () => {
  return ( <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/:id" element={<SinglePackage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter> );
}
 
export default App;
