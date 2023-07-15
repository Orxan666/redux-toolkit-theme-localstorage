import React from "react";
import HeroSlider from "../hero-slider/HeroSlider";
import MovieGrid from "../movie-grid/MovieGrid";
import { useSelector } from "react-redux";

const Home = () => {
  const darkmode = useSelector((state) => state.theme.darkmode);
  return (
    <div className= {darkmode ? 'bg-white text-black' : "bg-dark text-white"}>
      <HeroSlider />
      <MovieGrid type="movie" />
      <MovieGrid type="tv" />
    </div>
  );
};

export default Home;
