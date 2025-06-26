import React from 'react';
import style from './style.module.scss';
import { SocialButton } from '../Buttons/SocialButton';
import { GitHub, Instagram, Linkedin, Link2 } from 'react-feather';

const Intro = () => {
  return (
    <section className={style.content}>
      <div id={style.mask}>
        {/* <Image
          className={style.introImage}
          alt={'profile picture'}
          src={'/principal-image.jpg'}
          width={450}
          height={925}
          priority
        /> */}
      </div>
      <div className={style.intro}>
        <h1 className={style.position}>Gabriel Brandão</h1>
        <div className={style.iconWrapper}>
          <SocialButton
            href="https://www.linkedin.com/in/gabrielbrandaosales/"
            target="_blank"
            icon={Linkedin}
          />

          <SocialButton
            href="https://github.com/gabrielbrandaosales"
            target="_blank"
            icon={GitHub}
          />

          <SocialButton
            href="https://www.instagram.com/gabriel.brandao16/"
            target="_blank"
            icon={Instagram}
          />

          <SocialButton href="/resume.pdf" download icon={Link2} />
        </div>
        <h2 style={{ fontSize: '2rem' }}>Web Fullstack Developer.</h2>
      </div>
    </section>
  );
};

export default Intro;
