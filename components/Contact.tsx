import * as Dialog from "@radix-ui/react-dialog";
import styles from "./contact.module.css";
import { X } from "phosphor-react";

const Contact = () => (
  <div>
    <Dialog.Root>
      <Dialog.Trigger className={styles.button}>Contact</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title>Contact</Dialog.Title>
          <Dialog.Description>Get in touch</Dialog.Description>
          <Dialog.Close className={styles.close}>
            <X size={20} weight="regular" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
);

export default Contact;
