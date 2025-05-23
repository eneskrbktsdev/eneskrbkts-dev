import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ setActivePage }) {
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">EK</div>
      <ul className="navbar-links">
        <li onClick={() => setActivePage("anasayfa")}>Ana Sayfa</li>
        <li onClick={() => setActivePage("hakkimda")}>Hakkımda</li>
        <li onClick={() => setActivePage("yetenekler")}>Neler Yapabilirim?</li>
        <li
          onMouseEnter={() => setPortfolioOpen(true)}
          onMouseLeave={() => setPortfolioOpen(false)}
          className="portfolio-parent"
        >
          <span onClick={() => setActivePage("projelerim")}>Portfolyo</span>
          <div className={`dropdown ${portfolioOpen ? "open" : ""}`}>
            <div onClick={() => setActivePage("projelerim")}>Projelerim</div>
          </div>
        </li>
        <li onClick={() => setActivePage("iletisim")}>İletişim</li>
      </ul>
    </nav>
  );
}

export default Navbar;
