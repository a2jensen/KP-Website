import styles from "./page.module.css";

// components
import Title from "../components/homePage/title/title";
import Carousel from "../components/homePage/carousel/carousel";
import Summary from "../components/homePage/summary/summary";
import EventsLayout from "../components/homePage/eventslayout/eventslayout";
import { fetchSpreadsheetsData } from "@/lib/fetches";


export default async function Home() {
  const data = await fetchSpreadsheetsData();

  return (
    <main className={styles.main}>
      <Title />
      <Carousel />
      <Summary />
      <EventsLayout eventsData={data} />
    </main>
  );
}
