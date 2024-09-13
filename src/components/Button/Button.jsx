import Button from "../Button/Button.css";

function Button({ arrow, buttonStyle, loading, children, ...props }) {
  return;
  <button className={`button ${buttonStyle}`} {...props}>
    {children} TEST
  </button>;
}

export default Button;
