import Image from 'next/image';
import React from 'react';
import style from './style.module.scss';

const Header = () => {
  return (
    <nav className={style.header}>
      <div className="logo">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={80}
          priority
        />
      </div>
      <div>
        <ul className={style.navButton}>
          <li>
            <a href="">Experiência</a>
          </li>
          <li>
            <a href="">Formação</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
