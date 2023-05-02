import Button from "../ui/button";
import classes from './events-search.module.css'
const EventsSearch = (props) => {
    return ( <form className={classes.form}>
        <div className={classes.controls}>
            <div className={classes.control}><label htmlFor="year">Year</label>
                <select name="" id="year">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>
            <div className={classes.control}>
                <lebel htmlFor='month'></lebel>
                <select name="" id="month">
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>

                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">Septembar</option>
                    <option value="10">Octobar</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
        </div>
        <Button > Find Events</Button>
    </form> );
}
 
export default EventsSearch;