import styles from "./page.module.css";

// components
import Title from "../components/homePage/carousel/title/title";
import Carousel from "../components/homePage/carousel/carousel/carousel";
import Summary from "../components/homePage/carousel/summary/summary";
import EventsLayout from "../components/homePage/carousel/eventslayout/eventslayout";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav"
/* temp import for about page testing */
import About from "../app/about/page"


export default async function Home() {
  return (
    <main className={styles.main}>
      <Title />
      <Carousel />
      <Summary />
      <EventsLayout />
    </main>
  );
}
