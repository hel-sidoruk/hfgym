import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { navigationRoutes } from '../utils/navigationRoutes';
import styles from '../styles/header.module.scss';
import Burger from './UI/Burger';

const Navbar = () => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);

  const openMenu = () => {
    active ? setActive(false) : setActive(true);
  };

  const closeMenu = () => {
    if (active) setActive(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              priority={true}
              layout="fill"
              src="/images/logo-header.png"
              alt="HolyFamily logo"
            />
            Holy Family Gym
          </a>
        </Link>
        <nav
          onClick={() => setActive(false)}
          className={`${styles.nav} ${active ? styles.navActive : ''}`}
        >
          {navigationRoutes.map(({ id, to, text }) => (
            <Link key={id} href={to}>
              <a
                onClick={closeMenu}
                className={`${styles.link} ${
                  pathname === to ? styles.disabledLink : ''
                }`}
              >
                {text}
              </a>
            </Link>
          ))}
        </nav>
        <Burger active={active} openMenu={openMenu} />
      </div>
    </header>
  );
};

export default Navbar;
