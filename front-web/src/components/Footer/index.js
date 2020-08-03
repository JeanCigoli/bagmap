import React from "react";
import logo from "assets/logoBagMap.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Footer as FooterComponent } from "./styled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterComponent>
      <div className="row">
        <div className="logo">
          <img src={logo} />
        </div>
        <p>
          <span>Bag</span> Map
        </p>

        <div className="description">
          <h1>Company</h1>
          <ul className="navbar-nav">
            <li>
              <Link to="">Sobre</Link>
            </li>
            <li>
              <Link to="">Empregos</Link>
            </li>
            <li>
              <Link to="">Imprensa</Link>
            </li>
            <li>
              <Link to="">Novidades</Link>
            </li>
          </ul>
        </div>

        <div className="description">
          <h1>Company</h1>
          <ul className="navbar-nav">
            <li>
              <Link to="">Sobre</Link>
            </li>
            <li>
              <Link to="">Empregos</Link>
            </li>
            <li>
              <Link to="">Imprensa</Link>
            </li>
            <li>
              <Link to="">Novidades</Link>
            </li>
          </ul>
        </div>

        <div className="description">
          <h1>Company</h1>
          <ul className="navbar-nav">
            <li>
              <Link to="">Sobre</Link>
            </li>
            <li>
              <Link to="">Empregos</Link>
            </li>
            <li>
              <Link to="">Imprensa</Link>
            </li>
            <li>
              <Link to="">Novidades</Link>
            </li>
          </ul>
        </div>

        <div className="redes-sociais">
          <FaFacebook size="45" color="#fff" />
          <FaInstagram size="45" color="#fff" />
          <FaTwitter size="45" color="#fff" />
        </div>
      </div>
    </FooterComponent>
  );
};

export default Footer;
