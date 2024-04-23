// temporary home page file, will get migrated over to main page

import styles from "./page.module.css";

// components
import Navbar from "../../components/navbar/navbar";
import Title from "../../components/title/title";
import Carousel from "../../components/carousel/carousel";
import EventsLayout from "../../components/eventslayout/eventslayout";
import Footer from "../../components/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
     <Navbar />
     <Title />
     <Carousel />
     <EventsLayout />
     <Footer />
    </main>
  );
}
