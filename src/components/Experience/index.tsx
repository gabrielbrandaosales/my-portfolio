import React from 'react';
import style from './style.module.scss';
import CardExperience from '../Card/CardExperience';

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
        <CardExperience
          title="GBM Tech & Control"
          year="2023"
          position="Developer Jr"
          description="Desenvolvimento backoffice com Next.js, com habilidades em refatoração, otimização e versionamento de código usando Bitbucket"
          technologies={['HTML', 'SCSS', 'JavaScript', 'Next', 'Node']}
        />
        <CardExperience
          title="BDS Data Solutions"
          year="2021-22"
          position="Developer"
          description="Desenvolvimento de API Office com foco em performance e compatibilidade cross-browser em Javascript. Otimização de código, controle de versão com Azure e metodologia ágil (Scrumban)."
          technologies={[
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'PostgreSQL',
            'Azure',
            'Scrumban',
          ]}
        />
      </article>
    </section>
  );
};

export default Experiencia;
