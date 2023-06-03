import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Weather CMS</h1>

      <p className={styles["temp-p"]}>
        This is a CMS for weather data. It is a work in progress. It is not
        ready for production use.
      </p>
    </div>
  );
}
