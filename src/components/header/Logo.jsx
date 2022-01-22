import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      <Link className="link" to="/">
        سفیر <span>کویر</span>
      </Link>
    </div>
  );
};

export default Logo;
