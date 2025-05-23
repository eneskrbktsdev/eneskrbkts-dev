import React from "react";
import "../components/Projelerim.css";

// Görselleri import et
import wikipedia1 from "../images/wikipediaprojesi1.png";
import wikipedia2 from "../images/wikipediaprojesi2.png";
import ebay1 from "../images/ebayprojesi1.png";
import ebay2 from "../images/ebayprojesi2.png";
import hesapmakinesi from "../images/hesapmakinesiprojesi.png";

const projeler = [
  {
    ad: "Wikipedia Projesi",
    aciklama:
      "Konsol tabanlı, kullanıcıdan aldığı konuyla ilgili Wikipedia özetini gösteren Python uygulaması.",
    gorseller: [wikipedia1, wikipedia2],
  },
  {
    ad: "Ebay Botu Projesi",
    aciklama:
      "Ebay sitesi için ürün takibi ve bildirim yapan otomasyon projesi.",
    gorseller: [ebay1, ebay2],
  },
  {
    ad: "Hesap Makinesi Projesi",
    aciklama:
      "Konsolda çalışan dört işlem yapan basit hesap makinesi uygulaması.",
    gorseller: [hesapmakinesi],
  },
];

export default function Projelerim() {
  return (
    <div className="projelerim-container">
      <h2 className="projelerim-baslik">Projelerim</h2>
      <div className="projeler-grid">
        {projeler.map((proje, i) => (
          <div className="proje-karti" key={i}>
            <h3>{proje.ad}</h3>
            <p>{proje.aciklama}</p>
            <div className="proje-gorseller">
              {proje.gorseller.map((img, idx) => (
                <img src={img} alt={proje.ad + " görsel " + (idx + 1)} key={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
