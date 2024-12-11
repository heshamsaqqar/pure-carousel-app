import Carousel from "../components/Carousel";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Carousel />
      </main>
    </div>
  );
}
