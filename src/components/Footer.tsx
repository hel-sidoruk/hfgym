import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Link href="/" className="footer__logo" as="image">
          <Image src="/images/logo-footer.png" alt="HolyFamily logo" fill sizes="30vw" />
        </Link>
        <div className="footer__info">
          <p className="footer__text">Мы в социальных сетях:</p>
          <div className="footer__social">
            <a
              target="_blank"
              className="footer__socialLink"
              href="https://vk.com/bjj_holyfamilygym"
              rel="noreferrer"
            >
              <Image src="/icons/vk.svg" alt="vk icon" fill sizes="20vw" />
            </a>
            <a
              target="_blank"
              className="footer__socialLink"
              href="https://www.instagram.com/holyfamilygym/"
              rel="noreferrer"
            >
              <Image src="/icons/instagram.svg" alt="instagram icon" fill sizes="20vw" />
            </a>
            <a
              target="_blank"
              className="footer__socialLink"
              href="https://facebook.com/HolyFamilyGym/"
              rel="noreferrer"
            >
              <Image src="/icons/fb.svg" alt="facebook icon" fill sizes="20vw" />
            </a>
          </div>
          <a className="footer__text footer__tel" href="tel:+375292765915">
            +375(29) 276-59-15
          </a>
          <address className="footer__text footer__address">
            г. Минск, ул. Михася Лынькова 19/1
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
