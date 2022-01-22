import Bars from "../../icons/bars-solid.svg";
import Times from "../../icons/times-solid.svg";

const BurgerMenu = ({ toggle, setToggle }) => {
  return (
    <div onClick={() => setToggle(!toggle)} className="burger-menu">
      <img width={30} src={toggle ? Times : Bars} alt="toggle icon for menu" />
    </div>
  );
};

export default BurgerMenu;
