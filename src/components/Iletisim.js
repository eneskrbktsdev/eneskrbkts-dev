import React, { useState } from "react";
import "./Iletisim.css";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

const Iletisim = () => {
  const [form, setForm] = useState({ ad: "", email: "", icerik: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ ad: "", email: "", icerik: "" });
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <section id="iletisim" className="iletisim">
      <h2>İletişim</h2>
      <div className="iletisim-content">
        <form className="iletisim-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="ad"
            placeholder="Ad Soyad"
            value={form.ad}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Mail"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="icerik"
            placeholder="Mesajınız..."
            value={form.icerik}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="gonder-btn">
            Gönder
          </button>
          {sent && <div className="success-msg">Gönderildi!</div>}
        </form>
        <div className="iletisim-links">
          <a href="https://github.com/eneskrbktsdev" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          <a href="#" className="disable-link"><FaTwitter /> X (Yok)</a>
          <a href="#" className="disable-link"><FaFacebook /> Facebook (Yok)</a>
          <div className="mail-link">Mail: <span>mrenes24_24@hotmail.com</span></div>
        </div>
      </div>
    </section>
  );
};

export default Iletisim;
