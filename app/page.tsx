import styles from "./page.module.css";

// components
import Navbar from "../components/navbar/navbar";
import Title from "../components/title/title";
import Carousel from "../components/carousel/carousel";
import Summary from "../components/summary/summary";
import EventsLayout from "../components/eventslayout/eventslayout";
import Footer from "../components/footer/footer";


export default async function Home() {
  return (
    <main className={styles.main}>
     <Navbar />
     <Title />
     <Carousel />
     <Summary />
     <EventsLayout />
     <Footer />
    </main>
  );
}
