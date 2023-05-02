import Link from "next/link"
import classes from "./button.module.css"

const Button = (props) => {
  return !!props.link ? (
    <Link href={props.link}>
      <div className={classes.btn}>{props.children}</div>
    </Link>
  ) : (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
