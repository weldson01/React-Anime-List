import { Routes, Route } from "react-router-dom";
import { Anime, Home } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime/:animeId" element={<Anime />} />
    </Routes>
  );
};
