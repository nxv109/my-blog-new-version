import Link from 'next/link';
import Image from 'next/image';
import ThreadsIcon from '@/assets/icons/threads.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import Button from '@/components/Button';

import './styles.scss';

function Header() {
  return (
    <nav className="nav">
      <div className="nav__logo">LOGO</div>
      <div className="nav__link">
        <Link className="nav__link__item" href="/">
          HOME
        </Link>
        <Link className="nav__link__item" href="/blogs">
          ABOUT ME
        </Link>
      </div>
      <div className="nav__social">
        <div className="nav__social__item">
          <Image alt="Threads" src={ThreadsIcon} fill />
        </div>
        <div className="nav__social__item">
          <Image alt="Instagram" src={InstagramIcon} fill />
        </div>
        <div className="nav__login-btn">
          <Button>LOGIN</Button>
        </div>
      </div>
    </nav>
  );
}

export default Header;