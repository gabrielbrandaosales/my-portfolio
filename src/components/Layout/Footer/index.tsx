import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { SocialButton } from '@/components/Buttons/SocialButton';
import { GitHub, Instagram, Linkedin } from 'react-feather';

const Footer = () => {
  return (
    <footer className={style.container} id="contact">
      <div className={style.content}>
        <p className={style.footerText}>
          Estou disponível para novos projetos no momento. Entre em contato
          comigo e marcamos uma conversa 👋
        </p>
        <div className={style.iconWrapper}>
          <SocialButton
            href="https://www.linkedin.com/in/gabrielbrandaosales/"
            target="_blank"
            text="/gabrielbrandaosales"
            icon={Linkedin}
            color="#FFF"
          />
          <SocialButton
            href="https://github.com/gabrielbrandaosales"
            target="_blank"
            text="/gabrielbrandaosales"
            icon={GitHub}
            color="#FFF"
          />
          <SocialButton
            href="https://www.instagram.com/gabriel.brandao16/"
            target="_blank"
            text="/gabriel.brandao16"
            icon={Instagram}
            color="#FFF"
          />
        </div>
        <p className={style.footerCopy}>
          Gabriel Brandão. Alguns direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
