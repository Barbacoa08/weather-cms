import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      &forall; by{" "}
      <a href="https://github.com/Barbacoa08/">
        <code>barbajoe</code>
      </a>
    </footer>
  );
};
