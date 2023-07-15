import React from "react";
import "./footer.scss";
import { useSelector } from "react-redux";
const Footer = () => {

const darkmode=useSelector((state)=>state.theme.darkmode)

  return <footer className={darkmode? 'bg-white text-black':'bg-black text-white'}>

<div className="container">
  <div className="row text-center">
    <div className="col-lg-4">
      <ul className="list-unstyled">
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
    </div>
    <div className="col-lg-4">
      <ul className="list-unstyled">
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
      </ul>
    </div>
    <div className="col-lg-4">
      <ul className="list-unstyled">
        <li>Elaqe</li>
        <li>Haqqimizda</li>
        <li>Blog</li>
        <li>+994 50 777 77 77</li>
      </ul>
    </div>
  </div>
</div>
  </footer>;
};

export default Footer;
