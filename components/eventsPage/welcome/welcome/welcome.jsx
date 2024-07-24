import styles from "./welcome.module.css";
import EventsCard from "../../../eventscard/eventscard";

export default function Welcome() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                welcome to our events page!
                <div className={styles.star} style={{ top: "-20px", left: "calc(100% + 20px)", transform: "rotate(10deg)"}}></div>
            </h3>
            <p>
                Throughout the year KP hosts events to build community and connection! <br />
                From Friendship Games to Pilipino Awareness Week to KAAmping. KP cultivates growth <br />
                in every space we walk through. Stay up to date with everything KP has on our calendar
            </p>

            <div className={styles.buttons}>
                <button className={styles.button}>Upcoming</button>
                <button className={styles.button}>Gen</button>
                <button className={styles.button}>Star</button>
                <button className={styles.button}>Core</button>
            </div>

            <h1 className={styles.eventstitle}>
                upcoming...
                <div className={styles.star} style={{top: "-35px;", left: "-350px", transform: "rotate(-10deg)"}}></div>
                <div className={styles.star} style={{ top: "-35pxpx", right: "-350px", transform: "rotate(10deg)" }}></div>
            </h1>
            <EventsCard />
        </div>
    );
}