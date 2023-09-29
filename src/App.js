import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { StrictMode, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root"),
);
