import { Routes, Route } from "react-router";

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

export default function App() {
  return (
    <>
      <Sidebar />

      <main className="portfolio-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}


