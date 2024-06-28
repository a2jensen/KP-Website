// import components
import Welcome from "../../components/eventsPage/welcome/welcome";
import EventsList from "../../components/eventsPage/welcome/eventsList/eventsList"

export default async function Events() {
    return (
        <main>
            <Welcome/>
            <EventsList />
        </main>
    )
}

