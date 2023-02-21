import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { navigationRoutes } from '../utils/navigationRoutes';
import Burger from './UI/Burger';

export const Header = () => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);

  const openMenu = () => {
    active ? setActive(false) : setActive(true);
  };

  const closeMenu = () => {
    if (active) setActive(false);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link href="/" className="header__logo">
          <Image
            priority={true}
            src="/images/logo-header.png"
            alt="HolyFamily logo"
            fill
            sizes="100vw"
          />
          Holy Family Gym
        </Link>
        <nav
          onClick={() => setActive(false)}
          className={`header__nav ${active ? 'header__navActive' : ''}`}
        >
          {navigationRoutes.map(({ id, to, text }) => (
            <Link
              key={id}
              href={to}
              onClick={closeMenu}
              className={`header__link ${pathname === to ? 'header__disabledLink' : ''}`}
            >
              {text}
            </Link>
          ))}
        </nav>
        <Burger active={active} openMenu={openMenu} />
      </div>
    </header>
  );
};
