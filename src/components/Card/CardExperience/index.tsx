import React from 'react';
import style from './styles.module.scss';

interface CardProps {
  title: string;
  position: string;
  description: string;
  technologies: string[];
  year: string;
}

const CardExperience: React.FC<CardProps> = ({
  title,
  position,
  description,
  technologies,
  year,
}) => {
  return (
    <div className={style.list}>
      <span className={style.year}>{year}</span>
      <h2 aria-label="Company">{title}</h2>
      <h2 aria-label="Position">{position}</h2>
      <p className={style.description} aria-label="Position description">
        {description}
      </p>
      <div className={style.tags} aria-label="technologies">
        {technologies.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default CardExperience;
