import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { Repos } from '@/@types/Repos';

interface Props {
  data: Repos;
}

const CardProject: React.FC<Props> = ({ data }) => {
  return (
    <div className={style.Card}>
      <div className={style.verticalFlex}>
        <div>
          <p className={style.project}>PROJETO</p>
          <h1 className={style.title}>{data.name}</h1>
        </div>
        <p className={style.time}>time</p>
      </div>

      {/* <Image
        className={style.image}
        src="#"
        width={241}
        height={150}
        alt="image"
      /> */}
    </div>
  );
};

export default CardProject;
