import React from "react";

function Iletisim() {
  return (
    <section className="section iletisim">
      <h2>İletişim</h2>
      <form className="iletisim-form" onSubmit={e => e.preventDefault()}>
        <label>Ad Soyad</label>
        <input type="text" required />
        <label>Email</label>
        <input type="email" required />
        <label>Mesajınız</label>
        <textarea required />
        <button type="submit">Gönder</button>
      </form>
      <div className="sosyal-linkler">
        <a href="https://github.com/eneskrbktsdev" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="#" style={{pointerEvents: 'none', opacity: 0.4}}>Facebook</a>
        <a href="#" style={{pointerEvents: 'none', opacity: 0.4}}>X</a>
        <div className="mail">{'mrenes24_24@hotmail.com'}</div>
      </div>
    </section>
  );
}
export default Iletisim;
