import React from 'react';
import style from './style.module.scss';
import CardEducation from '../Card/CardEducation';

const Education = () => {
  return (
    <section className={style.container} id="experience">
      <span>
        <h1 className={style.title}>formação</h1>
      </span>
      <article>
        <p className={style.experience} aria-label="Experience description">
          Minha mais recente experiência acadêmica foi o mestrado 🎓 que fiz no
          exterior em UX Design. Além disso me mantenho sempre atualizado com
          cursos intensivos online.
        </p>
        <div className={style.cardGroup}>
          <CardEducation
            title="Tecnólogo"
            name="Análise e Desenvolvimento de Sistemas"
            foundation="USJT"
          />
        </div>
      </article>
    </section>
  );
};

export default Education;
