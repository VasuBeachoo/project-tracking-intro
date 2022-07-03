const Link = ({ block, text, color }) => {
  return <p className={`${block}__link ${block}__link--${color}`}>{text}</p>;
};

export default Link;
