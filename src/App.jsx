import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Sidebar />

      <main className="portfolio-main">
       <Hero />
      </main>
    </>
  );
}

export default App;