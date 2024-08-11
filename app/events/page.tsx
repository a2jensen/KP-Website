// import components
import Welcome from "../../components/eventsPage/welcome/welcome"
import EventsList from "../../components/eventsPage/eventsList/eventsList"

// import Welcome from "../../components/eventsPage/welcome/welcome/welcome"

export default async function Events() {
    return (
        <main>
            <Welcome/>
            <EventsList />
        </main>
    )
}

