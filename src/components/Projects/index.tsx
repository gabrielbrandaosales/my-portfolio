import React from 'react';
import style from './style.module.scss';
import CardProject from '../Card/CardProject';

const Projects = () => {
  return (
    <section className={style.container} id="projects">
      <div className={style.content}>
        <span>
          <h1 className={style.title}>Projetos</h1>
        </span>
        <article>
          <p className={style.subtitle}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
          <div className={style.feedProjects}>
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
