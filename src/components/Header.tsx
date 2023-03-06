import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { navigationRoutes } from '../utils/navigationRoutes';
import Burger from './UI/Burger';

export const Header = ({ className }: { className: string }) => {
  const { pathname } = useRouter();
  const [active, setActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMenu = () => setActive((state) => !state);
  const closeMenu = () => {
    if (active) setActive(false);
  };
  useEffect(() => {
    if (pathname === '/') {
      const setHeaderState = () => {
        if (window.scrollY > 50 && !isScrolled) setIsScrolled(true);
        if (window.scrollY < 50 && isScrolled) setIsScrolled(false);
      };
      window.addEventListener('scroll', setHeaderState);
      return () => window.removeEventListener('scroll', setHeaderState);
    }
  }, [isScrolled, pathname]);

  return (
    <header className={`header ${className} ${isScrolled || pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container header__container">
        <Link href="/" className="header__logo" as="image">
          <Image priority src="/images/logo-footer.png" alt="HolyFamily logo" fill sizes="70px" />
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
