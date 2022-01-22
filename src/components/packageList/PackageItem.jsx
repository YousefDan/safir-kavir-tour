import { Link } from "react-router-dom";

const PackageItem = ({ item }) => {
    const { id, img, title,desc } = item;
  return (
    <div className="package-item">
      <div className="img-wrapper">
        <img src={img} alt={title} />
      </div>
      <div className="info-wrapper">
        <h6>{title}</h6>
        <p>{desc}</p>
        <Link
          className="more-details"
          style={{ textDecoration: "none" }}
          to={`/packages/${id}`}
        >
          جزییات بیشتر
        </Link>
      </div>
    </div>
  );
};

export default PackageItem;
