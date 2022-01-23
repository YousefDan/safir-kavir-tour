import { Fragment } from "react/cjs/react.production.min";
import "./gallery.scss";
import Heading from "../heading/Heading";

const Gallery = () => {
  return (
    <Fragment>
      <div className="gallery-heading">
        <Heading title="گالری" />
      </div>
      <section className="gallery">
        <figure className="gallery-item-1">
          <img src={`/images/g6.jpg`} alt="" />
        </figure>
        <figure className="gallery-item-2">
          <img src={`/images/g2.jpg`} alt="" />
        </figure>
        <figure className="gallery-item-3">
          <img src={`/images/g3.jpg`} alt="" />
        </figure>
        <figure className="gallery-item-4">
          <img src={`/images/g4.jpg`} alt="" />
        </figure>
        <figure className="gallery-item-5">
          <img src={`/images/g5.jpg`} alt="" />
        </figure>
        <figure className="gallery-item-6">
          <img src={`/images/g7.jpg`} alt="" />
        </figure>
      </section>
    </Fragment>
  );
};

export default Gallery;
