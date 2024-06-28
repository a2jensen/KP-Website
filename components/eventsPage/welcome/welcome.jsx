import styles from "./welcome.module.css"
import EventsCard from "../../homePage/carousel/eventscard/eventscard"

export default function Welcome() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>welcome to our events page!</h3>
            <p>Throughout the year KP hosts events to build community and connection! <br/>
            From Friendship Games to Pilipino Awareness Week to KAAmping. KP cultivates growth <br/>
            in every space we walk through. Stay up to date with everthing KP has on our calendar
            </p>
            <h1 className={styles.title}>upcoming events...</h1>
            <EventsCard />
        </div>
    )
}