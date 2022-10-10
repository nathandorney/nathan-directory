import Head from "next/head";
import MobileMenu from "./MobileMenu";
import Sidebar from "./Sidebar";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Nathan Website</title>
      </Head>
      <div className={styles.layout}>
        <Sidebar className={styles.sidebar} />
        <MobileMenu />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
