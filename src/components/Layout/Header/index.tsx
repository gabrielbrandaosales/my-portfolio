import Image from 'next/image';
import React from 'react';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.logo}>
        <h1>Dev.</h1>
      </span>
      <nav>
        <ul className={style.navButton}>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                alert('Em construção :)');
              }}>
              Education
            </a>
          </li>
          <li>
            <a
              href=""
              onClick={() => {
                alert('Em construção :)');
              }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
