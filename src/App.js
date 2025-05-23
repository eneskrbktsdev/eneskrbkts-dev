import React from "react";
import Navbar from "./components/Navbar";
import Anasayfa from "./components/Anasayfa";
import Hakkimda from "./components/Hakkimda";
import Yetenekler from "./components/Yetenekler";
import Projelerim from "./components/Projelerim";
import Iletisim from "./components/Iletisim";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <section id="anasayfa">
          <Anasayfa />
        </section>
        <section id="hakkimda">
          <Hakkimda />
        </section>
        <section id="yetenekler">
          <Yetenekler />
        </section>
        <section id="projelerim">
          <Projelerim />
        </section>
        <section id="iletisim">
          <Iletisim />
        </section>
      </div>
    </>
  );
}

export default App;
