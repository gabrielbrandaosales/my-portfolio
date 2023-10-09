import React from 'react';
import style from './style.module.scss';

interface Language {
  name: string;
  time: string;
}

interface Props {
  languages: Language[];
}

const Language: React.FC<Props> = ({ languages }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Courses & Certificates</h1>
      {languages.map(({ name, time }) => (
        <div className={style.languageGroup} key={name}>
          <p className={style.languageName}>{name}</p>
          <span className={style.separator}>/</span>
          <p className={style.languageTime}>{time}</p>
        </div>
      ))}
    </div>
  );
};

export default Language;
