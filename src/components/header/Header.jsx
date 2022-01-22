import { Link } from "react-router-dom";
import "./header.scss";
import Navbar from "./Navbar";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <BurgerMenu toggle={toggle} setToggle={setToggle} />
      <Logo />
      <Navbar toggle={toggle} />
      <div className="login-btn">
        <Link className="link" to="/login">
          ورود/عضویت
        </Link>
      </div>
    </header>
  );
};

export default Header;
