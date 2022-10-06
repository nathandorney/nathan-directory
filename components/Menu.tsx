import { Popover, PopoverTrigger, PopoverContent } from "../components/Popover";

import Nav from "../components/Nav";
import Link from "next/link";
import Contact from "./Contact";

import styles from "./nav.module.css";

const Menu = () => (
  <div className={styles.menuWrapper}>
    <div className={styles.menuInner}>
      <Popover>
        <div className={styles.menuText}>
          <Link href="/">
            <a>Nathan</a>
          </Link>
          <p className={styles.divider}>/</p>
          <PopoverTrigger className={styles.button}>
            <p>Active page</p>
          </PopoverTrigger>
        </div>

        <PopoverContent>
          <Nav />
        </PopoverContent>
      </Popover>

      <Contact />
    </div>
  </div>
);

export default Menu;
