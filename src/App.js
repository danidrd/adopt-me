import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Details from "./Details";
const App = () => {
  return (
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
  );
};
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
