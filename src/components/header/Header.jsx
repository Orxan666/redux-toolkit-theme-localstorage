import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setDefaultTheme } from "../../redux/slices/themeSlice";
const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  const darkmode = useSelector((state) => state.theme.darkmode);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      dispatch(setDarkTheme());
    } else {
      dispatch(setDefaultTheme());
    }
  }, []);
  const handleThemeToggle = () => {
    if (theme.darkmode) {
      dispatch(setDefaultTheme());
      localStorage.setItem("theme", "light");
    } else {
      dispatch(setDarkTheme());
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div>
      <header className={darkmode ? "" : "active"}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <h4>Logo</h4>
            </div>
            <nav className="menu">
              <ul className="d-flex align-items-center list-unstyled m-0">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/movie">Movie</Link>
                </li>
                <li>
                  <Link to="/tv-show">Tv Show</Link>
                </li>
                <li>
          {theme.darkmode ? (
            <input
              onClick={handleThemeToggle}
              type="checkbox"
              className="l"
              checked
            />
          ) : (
            <input
              onClick={handleThemeToggle}
              type="checkbox"
              className="l"
            />
          )}
        </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
