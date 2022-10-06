import { Popover, PopoverTrigger, PopoverContent } from "./Popover";
import { List } from "phosphor-react";
import styles from "./nav.module.css";
import Nav from "./Nav";
import Link from "next/link";
import Contact from "./Contact";

const Menu = () => (
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
        <Nav />
      </PopoverContent>
    </Popover>

    <Contact />
  </header>
);

export default Menu;
