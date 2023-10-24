import { useEffect } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { Repos } from '@/@types/repos';

interface Props {
  data: Repos;
}

const CardProject: React.FC<Props> = ({ data }) => {
  return (
    <div className={style.Card}>
      <div className={style.content}>
        <a href={data.homepage ?? ''} target="_blank">
          <p className={style.project}>PROJETO</p>
          <h1 className={style.title}>{data.name}</h1>
        </a>
        <p className={style.topicWrapper}>
          {data.topics.map((topic, index) => (
            <span className={style.topic} key={index}>
              {topic}
            </span>
          ))}
        </p>
      </div>
      <a
        href={data.homepage ?? ''}
        style={{ margin: 'auto 0' }}
        target="_blank">
        <Image
          className={style.image}
          src={data.screenshot ?? ''}
          width={241}
          height={150}
          alt="image"
        />
      </a>
    </div>
  );
};

export default CardProject;
