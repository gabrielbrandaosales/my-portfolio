import React from 'react';
import style from './style.module.scss';

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
        <div className={style.list}>
          <span className={style.year}>2023</span>
          <h2 aria-label="Company">GBM Tech & Control</h2>
          <h2 aria-label="Position">Developer Jr</h2>
          <p className={style.description} aria-label="Position description">
            Desenvolvo pequenos projetos como o Bikcraft utilizando apenas HTML,
            CSS e JavaScript. Para aplicativos web como a rede social Dogs.
          </p>
          <div className={style.tags} aria-label="technologies">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Next</p>
            <p>Node</p>
          </div>
        </div>
        <div className={style.list}>
          <span className={style.year}>2021-22</span>
          <h2 aria-label="Company">BDS Data Solutions</h2>
          <h2 aria-label="Position">Developer</h2>
          <p className={style.description} aria-label="Position description">
            Desenvolvo pequenos projetos como o Bikcraft utilizando apenas HTML,
            CSS e JavaScript. Para aplicativos web como a rede social Dogs.
          </p>
          <div className={style.tags} aria-label="technologies">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>PostgreSQL</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Education;
