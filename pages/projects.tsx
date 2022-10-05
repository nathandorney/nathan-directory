import Menu from "../components/Menu";
import Image from "next/image";
import styles from "./projects.module.css";

const ProjectPage = () => (
  <div>
    <Menu />
    <main>
      <h1>Projects</h1>
      <p>
        Over the years I have put a fair few little side projects out into the
        wild. Right now I am learning Javascript and React so I can build some
        larger projects that I have been thinking about for a long old while.
      </p>

      <ul className={styles.projectList}>
        <li>
          <a
            className={styles.projectItem}
            href="https://time-blocking.vercel.app/"
          >
            <Image
              src="/media/time-blocker.svg"
              width={48}
              height={48}
              className={styles.projectLogo}
            />
            <div className={styles.projectDescription}>
              <h2>Time Blocker</h2>
              <p>
                A simple way to plan your day without overwhelming your
                calendar.
              </p>
            </div>
          </a>
        </li>
        <li>
          <a className={styles.projectItem} href="https://isitgood.design/">
            <Image
              src="/media/good-design.svg"
              width={48}
              height={48}
              className={styles.projectLogo}
            />
            <div className={styles.projectDescription}>
              <h2>Good Design</h2>
              <p>
                Is it good design? A small tool that helps you benchmark a
                design against Dieter Rams' ten principles of good design.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </main>
  </div>
);

export default ProjectPage;
