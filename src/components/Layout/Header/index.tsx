import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import style from './style.module.scss';

const Header = () => {
  const [scrollFixo, setScrollFixo] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 10) {
        setScrollFixo(true);
      } else {
        setScrollFixo(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={scrollFixo ? style.scroll : style.header}>
      <span className={style.logo}>
        <a href="#">Dev.</a>
      </span>
      <nav>
        <ul className={style.navButton}>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
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
