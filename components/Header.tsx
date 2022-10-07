import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { List } from "phosphor-react";
import styles from "./header.module.css";
import Link from "next/link";
import Contact from "./Contact";
import MobileMenu from "./MobileMenu";
import ActiveLink from "./ActiveLink";

const Menu = () => (
  <div>
    <header className={styles.header}>
      <Popover>
        <div className={styles.left}>
          <PopoverTrigger className={styles.button}>
            <List size={20} weight="light" />
          </PopoverTrigger>

          <Link href="/">
            <a>Nathan Dorney</a>
          </Link>
        </div>

        <PopoverContent>
          <nav>
            <ul className={styles.nav}>
              <li>
                <ActiveLink activeClassName={styles.active} href="/">
                  <a className={styles.navLink}>Home</a>
                </ActiveLink>
              </li>

              <li>
                <ActiveLink activeClassName={styles.active} href="/work">
                  <a className={styles.navLink}>Work</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName={styles.active} href="/projects">
                  <a className={styles.navLink}>Projects</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName={styles.active} href="/desk">
                  <a className={styles.navLink}>Desk</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName={styles.active} href="/ceramics">
                  <a className={styles.navLink}>Ceramics</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName={styles.active} href="/photos">
                  <a className={styles.navLink}>Photos</a>
                </ActiveLink>
              </li>
            </ul>
          </nav>
        </PopoverContent>
      </Popover>

      <Contact />
    </header>
    <MobileMenu />
  </div>
);

export default Menu;
