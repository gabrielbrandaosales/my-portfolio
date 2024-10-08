import React from 'react';
import style from './style.module.scss';
import CardEducation from '../Card/CardEducation';
import CoursesSection from './Sections/CoursesSection';
import Languages from './Sections/LanguagesSection';
import Language from './Sections/LanguagesSection';

const Education = () => {
  return (
    <section className={style.container} id="education">
      <div className={style.content}>
        <span>
          <h1 className={style.title}>formação</h1>
        </span>
        <article>
          <p className={style.experience} aria-label="Experience description">
            Minha mais recente experiência acadêmica foi o tecnólogo que fiz na
            USJT em Análise e Desenvolvimento de Sistemaas. Além disso me
            mantenho sempre atualizado com cursos intensivos online.
          </p>
          <div className={style.cardGroup}>
            <CardEducation
              title="Técnico"
              name="Desenvolvimento de Sistemas"
              foundation="ETEC"
            />
            <CardEducation
              title="Tecnólogo"
              name="Análise e Desenvolvimento de Sistemas"
              foundation="USJT"
            />
          </div>
          <CoursesSection
            courses={[
              { name: 'React Completo', time: '36h' },
              { name: 'Next.js', time: '22h' },
              { name: 'JavaScript Completo ES6', time: '74h' },
              { name: 'HTML e CSS para iniciantes', time: '46h' },
            ]}
          />

          <Language languages={[{ name: 'Inglês', time: 'Intermediário' }]} />
        </article>
      </div>
    </section>
  );
};

export default Education;
