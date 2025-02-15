import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import RestaurantDetails from "./components/RestaurantDetails";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
