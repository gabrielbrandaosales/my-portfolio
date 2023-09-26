import Image from 'next/image';
import React from 'react';
import style from './style.module.scss';

const Intro = () => {
  return (
    <section className={style.conteudo}>
      <div id={style.mask}>
        <Image
          className={style.introImage}
          alt={'profile picture'}
          src={'/principal-image.jpg'}
          width={450}
          height={925}
          priority
        />
      </div>
      <div>
        <h1>Desenvolvedor Full Stack</h1>
        <p>Localizado em São Paulo</p>
      </div>
    </section>
  );
};

export default Intro;
