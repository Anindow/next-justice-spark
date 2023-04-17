import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <div className={classes.btn}>{props.children}</div>
    </Link>
  );
};

export default Button;
