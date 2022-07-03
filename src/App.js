import Header from "./components/Header";
import Link from "./components/Link";
import introImg from "./assets/illustration-devices.svg";
import "./css/style.css";

const App = () => {
  const navLinks = [
    {
      text: "PRODUCT",
      color: "black",
    },
    {
      text: "FEATURES",
      color: "black",
    },
    {
      text: "PRICING",
      color: "black",
    },
    {
      text: "LOGIN",
      color: "grey",
    },
  ];

  function renderLinks(block, links) {
    return links.map((link) => (
      <Link block={block} text={link.text} color={link.color} />
    ));
  }

  return (
    <div className="page-container">
      <div className="page">
        <Header navLinks={renderLinks("header", navLinks)} />
        <section className="intro">
          <div className="intro__text-container">
            <div className="intro__tag-container">
              <p className="intro__new-tag">NEW</p>
              <p className="intro__light-paragraph">MONOGRAPH DASHBOARD</p>
            </div>
            <h1 className="intro__heading">POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p className="intro__paragraph">
              Project planning and time tracking for agile teams
            </p>
            <div className="intro__btn-container">
              <button className="intro__btn">SCHEDULE A DEMO</button>
              <p className="intro__light-paragraph">TO SEE A PREVIEW</p>
            </div>
          </div>
          <div className="intro__img-container">
            <img src={introImg} alt="intro-devices" className="intro__img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
