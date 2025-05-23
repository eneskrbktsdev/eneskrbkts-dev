import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Anasayfa from "./components/Anasayfa";
import Hakkimda from "./components/Hakkimda";
import Yetenekler from "./components/Yetenekler";
import Projelerim from "./components/Projelerim";
import Iletisim from "./components/Iletisim";

function App() {
  const [activePage, setActivePage] = useState("anasayfa");

  return (
    <div className="app">
      <Navbar setActivePage={setActivePage} />
      <main>
        {activePage === "anasayfa" && <Anasayfa />}
        {activePage === "hakkimda" && <Hakkimda />}
        {activePage === "yetenekler" && <Yetenekler />}
        {activePage === "projelerim" && <Projelerim />}
        {activePage === "iletisim" && <Iletisim />}
      </main>
    </div>
  );
}

export default App;
