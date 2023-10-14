import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { Repos } from '@/@types/Repos';

interface Props {
  data: Repos;
}

const CardProject: React.FC<Props> = ({ data }) => {
  console.log(data);

  return (
    <div className={style.Card}>
      <div className={style.verticalFlex}>
        <a href={data.homepage} target="_blank">
          <p className={style.project}>PROJETO</p>
          <h1 className={style.title}>{data.name}</h1>
        </a>
        <p className={style.time}>
          {data.topics.map((topic, index) => (
            <span className={style.topic} key={index}>
              {topic}
            </span>
          ))}
        </p>
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
