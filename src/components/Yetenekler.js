import React from "react";
import "./Yetenekler.css";

const YETENEKLER = [
  { ad: "Python", seviye: 90 },
  { ad: "JavaScript", seviye: 85 },
  { ad: "C#", seviye: 80 },
  { ad: "HTML / CSS", seviye: 85 },
  { ad: "React", seviye: 78 },
  { ad: "Selenium", seviye: 75 },
  { ad: "MySQL", seviye: 65 },
];

const Yetenekler = () => (
  <section id="yetenekler" className="yetenekler">
    <h2>Yetenekler</h2>
    <div className="yetenekler-list">
      {YETENEKLER.map((yet, i) => (
        <div className="yet-card" key={i}>
          <div className="yet-header">
            <span>{yet.ad}</span>
            <span>{yet.seviye}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${yet.seviye}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Yetenekler;
