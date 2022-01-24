import { Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import "./footer.scss";

const Footer = () => {
  return (
     <Fragment>
    <footer>
      <div className="footer-item">
        <h3>درباره ما</h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کاربردهای متنوع
          با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
      </div>
      <div className="footer-item">
        <h3>لینک های مفید</h3>
        <ul className="footer-links">
          <li className="footer-link">
            <i className="fas fa-arrow-left"></i>
            <Link className="text-decoration-none" to="/">
              خانه
            </Link>
          </li>
          <li className="footer-link">
            <i className="fas fa-arrow-left"></i>
            <Link className="text-decoration-none" to="/packages">
              پکیج ها
            </Link>
          </li>
          <li className="footer-link">
            <i className="fas fa-arrow-left"></i>
            <Link className="text-decoration-none" to="/blog">
              بلاگ
            </Link>
          </li>
          <li className="footer-link">
            <i className="fas fa-arrow-left"></i>
            <Link className="text-decoration-none" to="/contact">
              تماس با ما
            </Link>
          </li>
          <li className="footer-link">
            <i className="fas fa-arrow-left"></i>
            <Link className="text-decoration-none" to="/about">
              درباره ما
            </Link>
          </li>
          <li className="footer-link">
            <i className="fas fa-arrow-left"></i>
            <Link className="text-decoration-none" to="/login">
              ورود به حساب کاربری
            </Link>
          </li>
          <li className="footer-link">
            <i className="fas fa-arrow-left"></i>
            <Link className="text-decoration-none" to="/register">
              عضویت در سایت
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-item">
        <h3>اطلاعات تماس</h3>
        <div className="contact-info">
          <div>
            <i className="fas fa-map"></i>
            ایران - کاشان
          </div>
          <div>
            <i className="fas fa-phone"></i>
            091333333333
          </div>
          <div>
            <i className="fas fa-envelope"></i>
            info@safirkavir.com
          </div>
        </div>
        <div className="footer-icons">
          <div style={{ backgroundColor: "#2980b9" }} className="footer-icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div style={{ backgroundColor: "#e74c3c" }} className="footer-icon">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="footer-icon">
            <i className="fab fa-twitter"></i>
          </div>
          <div style={{ backgroundColor: "#27ae60" }} className="footer-icon">
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </div>
    </footer>
    <div className="credit">
        Copyright &copy; 2022
    </div>
    </Fragment>
  );
};

export default Footer;
