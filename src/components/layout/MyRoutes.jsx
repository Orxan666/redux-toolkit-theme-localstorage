import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import MovieDetail from "../MovieDetail/MovieDetail";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Catalog/>} />
      <Route path="/movie/:id/" element={<MovieDetail/>} />
    </Routes>
  );
};

export default MyRoutes;
