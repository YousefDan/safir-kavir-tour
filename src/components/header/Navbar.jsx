import { Link } from "react-router-dom";

const Navbar = ({toggle}) => {
  return (
    <nav style={{clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)"}} className="navbar">
      <ul className="links">
        <li>
          <Link className="link" to="/">
            خانه
          </Link>
        </li>
        <li>
          <Link className="link" to="/packages">
            پکیج ها
          </Link>
        </li>
        <li>
          <Link className="link" to="/blog">
            بلاگ
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            تماس با ما
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            درباره ما
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
