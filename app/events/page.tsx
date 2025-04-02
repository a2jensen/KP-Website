// import components
import Welcome from "../../components/eventsPage/welcome/welcome"
import EventsList from "../../components/eventsPage/eventsList/eventsList"
import { fetchSpreadsheetsData } from "@/lib/fetches"

export default async function Events() {
    // fetch data, pass it to events list component
    const data = await fetchSpreadsheetsData();

    return (
        <main>
            <Welcome eventsData={data}/>
            <EventsList eventsData={data}/>
        </main>
    )
}

