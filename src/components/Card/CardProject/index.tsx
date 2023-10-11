import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';

const CardProject = () => {
  return (
    <div className={style.Card}>
      <div className={style.verticalFlex}>
        <div>
          <p className={style.project}>PROJETO</p>
          <h1 className={style.title}>name</h1>
        </div>
        <p className={style.time}>time</p>
      </div>

      <Image
        className={style.image}
        src="blob:https://vercel.com/cd7f074c-b885-4819-994a-d1fe670ff3fc"
        width={241}
        height={150}
        alt="image"
      />
    </div>
  );
};

export default CardProject;
