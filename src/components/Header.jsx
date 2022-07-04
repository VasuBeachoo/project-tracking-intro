import logo from "../assets/logo.svg";
import menuOpen from "../assets/icon-hamburger.svg";
import menuClose from "../assets/icon-close.svg";

const Header = ({ navLinks, menu, setMenu }) => {
  const block = "header";

  return (
    <section className={`${block}`}>
      <img src={logo} alt="logo" className={`${block}__logo`} />
      <div className={`${block}__links`}>{navLinks}</div>
      {menu ? (
        <img
          src={menuClose}
          alt="menu-close"
          className={`${block}__menu-close`}
          onClick={() => setMenu(false)}
        />
      ) : (
        <img
          src={menuOpen}
          alt="menu-open"
          className={`${block}__menu-open`}
          onClick={() => setMenu(true)}
        />
      )}
    </section>
  );
};

export default Header;
