import logo from "../assets/logo.svg";

const Header = ({ navLinks }) => {
  const block = "header";

  return (
    <section className={`${block}`}>
      <img src={logo} alt="logo" className={`${block}__logo`} />
      <div className={`${block}__links`}>{navLinks}</div>
    </section>
  );
};

export default Header;
