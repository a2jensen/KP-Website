import Image from "next/image";
import styles from "./page.module.css";

// components
import Navbar from "../components/navbar";
import Title from "../components/title";
import Carousel from "../components/carousel";
import EventsLayout from "../components/eventslayout";
import Footer from "../components/footer";

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
