import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ErrorBoundary from "./components/ErrorBoundary";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<ErrorBoundary><Blog /></ErrorBoundary>} />
        <Route path="blog/:slug" element={<ErrorBoundary><BlogPost /></ErrorBoundary>} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}
