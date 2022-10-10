import * as Dialog from "@radix-ui/react-dialog";
import styles from "./mobile-menu.module.css";
import {
  DotsThree,
  House,
  Cursor,
  Code,
  Desktop,
  Link,
  Camera,
} from "phosphor-react";
import ActiveLink from "./ActiveLink";

const MobileMenu = () => (
  <div>
    <Dialog.Root>
      <Dialog.Trigger className={styles.button}>
        <DotsThree size={32} weight="light" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Close className={styles.close}>
            <div className={styles.closeHandle}></div>
          </Dialog.Close>

          <nav>
            <ul className={styles.nav}>
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
);

export default MobileMenu;
