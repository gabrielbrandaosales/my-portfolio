import Image from 'next/image';
import React from 'react';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.logo}>
        <a href="#">Dev.</a>
      </span>
      <nav>
        <ul className={style.navButton}>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#education">Formação</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
