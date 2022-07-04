import { useState, useEffect } from "react";
import Header from "./components/Header";
import Link from "./components/Link";
import Button from "./components/Button";
import introImg from "./assets/illustration-devices.svg";
import "./css/style.css";

const App = () => {
  let key = 0;
  const DIVIDER_TYPE = "divider";
  const BLACK_COLOR = "black";
  const GREY_COLOR = "grey";
  const mobileWidth = 950;

  const navLinks = [
    {
      text: "PRODUCT",
      color: BLACK_COLOR,
    },
    {
      text: "FEATURES",
      color: BLACK_COLOR,
    },
    {
      text: "PRICING",
      color: BLACK_COLOR,
    },
    {
      type: DIVIDER_TYPE,
    },
    {
      text: "LOGIN",
      color: GREY_COLOR,
    },
  ];

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  });

  function resizeWindow() {
    if (window.innerWidth > mobileWidth) setMenu(false);
  }

  function renderLinks(block, links) {
    return links.map((link) => {
      if (link.type) {
        if (link.type === DIVIDER_TYPE) {
          return <div key={key++} className={`${block}__divider`}></div>;
        }
      } else {
        return (
          <Link key={key++} block={block} text={link.text} color={link.color} />
        );
      }
      return <div></div>;
    });
  }

  return (
    <div className="page-container">
      <div className="page">
        <Header
          navLinks={renderLinks("header", navLinks)}
          menu={menu}
          setMenu={setMenu}
        />
        {menu && (
          <section className="menu">{renderLinks("menu", navLinks)}</section>
        )}
        <section className="intro">
          <div className="intro__text-container">
            <div className="intro__tag-container">
              <p className="intro__tag">NEW</p>
              <p className="intro__light-paragraph">MONOGRAPH DASHBOARD</p>
            </div>
            <h1 className="intro__heading">POWERFUL INSIGHTS INTO YOUR TEAM</h1>
            <p className="intro__paragraph">
              Project planning and time tracking for agile teams
            </p>
            <div className="intro__btn-container">
              <Button block="intro" text="SCHEDULE A DEMO" />
              <p className="intro__light-paragraph">TO SEE A PREVIEW</p>
            </div>
          </div>
          <div className="intro__img-container">
            <img src={introImg} alt="intro-devices" className="intro__img" />
          </div>
        </section>
        <div className="bg-pattern"></div>
      </div>
    </div>
  );
};

export default App;
