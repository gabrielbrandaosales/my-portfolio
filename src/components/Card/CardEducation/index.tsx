import React from 'react';
import style from './style.module.scss';

interface props {
  title: string;
  name: string;
  foundation: string;
}

const CardEducation: React.FC<props> = ({ title, name, foundation }) => {
  return (
    <div className={style.card}>
      <div className={style.wrapperContent}>
        <p>{title}</p>
        <h2>{name}</h2>
      </div>

      <h3>{foundation}</h3>
    </div>
  );
};

export default CardEducation;
