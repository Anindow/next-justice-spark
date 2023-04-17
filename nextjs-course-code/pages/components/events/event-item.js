import Button from "../ui/button"
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import classes from  './event-item.module.css'
const EventItem = (props) => {
  const { title, image, date, location, id } = props
  const humanReadableDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const formattedAddress = location.replace(",", "\n")
  const exploreLink = `/events/${id}`
  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon  />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem