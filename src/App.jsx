import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Sidebar from "./components/Sidebar";
import { MovieContext, ThemeContext } from "./context/Context";

function App() {
  const [cardData, setCardData] = useState([]);
  const [theme, setTheme] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MovieContext.Provider value={{ cardData, setCardData }}>
          <div className={` h-full w-full ${theme ? "dark" : ""}`}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieList />
              </div>
            </main>
            <Footer />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
