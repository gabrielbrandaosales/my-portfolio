import React from 'react';
import style from './style.module.scss';

const Experiencia = () => {
  return (
    <section className={style.container} id="experience">
      <span>
        <h1 className={style.title}>experiência</h1>
      </span>
      <article>
        <p className={style.experience} aria-label="Experience description">
          Desenvolvo pequenos projetos como o Meu Portifólio utilizando{' '}
          <span className={style.bold}>HTML</span>,{' '}
          <span className={style.bold}>SCSS</span> e{' '}
          <span className={style.bold}>JavaScript</span>. Para aplicativos web
          como a rede social Dogs eu trabalhei no UX e UI Design do projeto.
        </p>
        <div className={style.list}>
          <span className={style.year}>2023</span>
          <h2 aria-label="Company">GBM Tech & Control</h2>
          <h2 aria-label="Position">Developer Jr</h2>
          <p className={style.description} aria-label="Position description">
            Desenvolvimento backoffice com Next.js, com habilidades em
            refatoração, otimização e versionamento de código usando Bitbucket
          </p>
          <div className={style.tags} aria-label="technologies">
            <p>HTML</p>
            <p>SCSS</p>
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
            Desenvolvimento de API Office com foco em performance e
            compatibilidade cross-browser em Javascript. Otimização de código,
            controle de versão com Azure e metodologia ágil (Scrumban).
          </p>
          <div className={style.tags} aria-label="technologies">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>PostgreSQL</p>
            <p>Azure</p>
            <p>Scrumban</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Experiencia;
