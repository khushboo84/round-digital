import "./App.css";
import ContactUs from "./ContactUs";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Home from "./components/Home";
import Blog from "./components/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar /> {/* Place your Navbar component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="blog/Post/:id" element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
