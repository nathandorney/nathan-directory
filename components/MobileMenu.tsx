import * as Dialog from "@radix-ui/react-dialog";
import styles from "./mobile-menu.module.css";
import { X, DotsThree } from "phosphor-react";
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
            {" "}
            <X size={20} weight="regular" />
          </Dialog.Close>

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
                <ActiveLink activeClassName={styles.active} href="/coffee">
                  <a className={styles.navLink}>Coffee</a>
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
);

export default MobileMenu;
