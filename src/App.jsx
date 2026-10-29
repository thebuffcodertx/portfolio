import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Sidebar />

      <main className="portfolio-main">
       <Hero />
           <About />
        <Footer />
      </main>
    </>
  );
}

export default App;