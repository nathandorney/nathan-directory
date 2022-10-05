import ActiveLink from './ActiveLink'
import styles from './nav.module.css'

const Nav = () => (
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



      {/* <li>
        <ActiveLink activeClassName="active" href="/[slug]" as="/dynamic-route">
          <a className="nav-link">Dynamic Route</a>
        </ActiveLink>
      </li> */}
    </ul>
  </nav>
)

export default Nav
