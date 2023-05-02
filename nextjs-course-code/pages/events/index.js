import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = () => {
    const  events = getAllEvents()

    return ( <>
    <EventsSearch />
       <EventList items={events} />
    </> );
}
 
export default AllEventsPage;