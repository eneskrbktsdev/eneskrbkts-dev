import React from "react";
import "./Anasayfa.css";

const Anasayfa = () => {
  // Projelere göz at butonuna tıklayınca projelerim bölümüne kaydırır
  const handleGoToProjects = () => {
    const projelerimSection = document.getElementById("projelerim");
    if (projelerimSection) {
      projelerimSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="anasayfa-container">
      <h1>
        Merhaba, ben <span className="highlight">Enes Karabektaş</span>
      </h1>
      <h2>Bilgisayar Mühendisliği Son Sınıf Öğrencisi</h2>
      <p>
        Oyun ve yazılım otomasyonuna ilgim var.<br />
        İnternet otomasyonları ve küçük ölçekli uygulamalar geliştirmekteyim.
      </p>
      <button className="go-to-projects-btn" onClick={handleGoToProjects}>
        Projelerime Göz At
      </button>
    </div>
  );
};

export default Anasayfa;
