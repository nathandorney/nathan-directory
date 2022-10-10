import Layout from "../components/Layout";
import Image from "next/image";
import styles from "./photos.module.css";

export default function Photo() {
  return (
    <div>
      <h1>Photography</h1>
      <p>
        Exploring medium format film photography with my great uncle Henry's
        Ziess Ikonta which he bought in 1952.
      </p>

      <ul className={styles.list}>
        <li>
          <Image
            src="/media/photography/cdf2.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
        <li>
          <Image
            src="/media/photography/cdf3.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
        <li>
          <Image
            src="/media/photography/cdf4.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
        <li>
          <Image
            src="/media/photography/ams1.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
        <li>
          <Image
            src="/media/photography/ams2.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
        <li>
          <Image
            src="/media/photography/ams3.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
        <li>
          <Image
            src="/media/photography/ams4.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
        <li>
          <Image
            src="/media/photography/ams5.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
        <li>
          <Image
            src="/media/photography/ams6.jpg"
            width={2000}
            height={2000}
          ></Image>
        </li>
      </ul>
    </div>
  );
}

Photo.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
