import { useState } from "react";
import { imgSources } from "../../dummyData";
import "./intro.scss";

const Intro = () => {
  const [src, setSrc] = useState(imgSources[0].src);

  return (
    <section className="intro">
      <div className="intro-img-container">
        <img src={src} alt="desert img" />
      </div>
      <div className="intro-info">
        <div className="info">
          <h1>کویر را با سفیر کویر کشف کنید</h1>
          <p className="intro-description">
            سفیر کویر مجری تورهای کویر مرکزی ایران با بیش از 10 سال سابقه با
            کادری مجرب و آزموده
          </p>
        </div>
        <div className="controls">
          {imgSources.map((item) => (
            <div
              style={{
                backgroundColor: item.src === src && "var(--orange-color)",
              }}
              onClick={() => setSrc(item.src)}
              className="img-btn"
              key={item.id}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
