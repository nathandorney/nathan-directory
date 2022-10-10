import styles from "./sidebar.module.css";
import { House, Cursor, Code, Desktop, Link, Camera } from "phosphor-react";
import Contact from "./Contact";
import ActiveLink from "./ActiveLink";

const Sidebar = () => (
  <aside className={styles.aside}>
    <div className={styles.sidebar}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <ActiveLink activeClassName={styles.active} href="/">
              <a className={styles.navLink}>
                {" "}
                <House size={20} weight="light" />
                Home
              </a>
            </ActiveLink>
          </li>

          <li>
            <ActiveLink activeClassName={styles.active} href="/work">
              <a className={styles.navLink}>
                <Cursor size={20} weight="light" />
                Work
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName={styles.active} href="/projects">
              <a className={styles.navLink}>
                <Code size={20} weight="light" />
                Projects
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName={styles.active} href="/desk">
              <a className={styles.navLink}>
                <Desktop size={20} weight="light" />
                Desk
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName={styles.active} href="/bookmarks">
              <a className={styles.navLink}>
                <Link size={20} weight="light" />
                Bookmarks
              </a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName={styles.active} href="/photos">
              <a className={styles.navLink}>
                <Camera size={20} weight="light" />
                Photos
              </a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
      <Contact />
    </div>
  </aside>
);

export default Sidebar;
