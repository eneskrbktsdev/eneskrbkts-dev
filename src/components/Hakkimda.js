import React from "react";
import "./Hakkimda.css";

const Hakkimda = () => {
  return (
    <section id="hakkimda" className="hakkimda">
      <h2>Hakkımda</h2>
      <div className="hakkimda-content">
        <div className="hakkimda-avatar">
          {/* Avatar resmi eklemek istersen /public/avatar.png olarak kaydet, src="/avatar.png" yaz */}
          <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Enes" alt="avatar" />
        </div>
        <div>
          <p>
            Bilgisayar Mühendisliği son sınıf öğrencisiyim. Oyun yapımı ve otomasyonlara ilgi duyuyorum.
            Özellikle internet otomasyonları, küçük ölçekli araçlar ve yaratıcı projeler geliştirmekten keyif alıyorum.
            Öğrenmeye, denemeye ve teknolojide yeniliğe her zaman açığım!
          </p>
          <div className="istatistikler">
            <div>
              <span className="istat-value">5+</span>
              <span className="istat-label">Proje</span>
            </div>
            <div>
              <span className="istat-value">5</span>
              <span className="istat-label">Yıl Deneyim</span>
            </div>
            <div>
              <span className="istat-value">6+</span>
              <span className="istat-label">Teknoloji</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hakkimda;
