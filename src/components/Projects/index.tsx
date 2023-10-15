import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { api } from '../../lib/axios';
import CardProject from '../Card/CardProject';
import { Repos } from '@/@types/repos';

const Projects = () => {
  const [repos, setRepos] = useState<Repos[]>([] as Repos[]);

  useEffect(() => {
    api
      .get<Repos[]>('/users/gabrielbrandaosales/repos')
      .then((response) => setRepos(response.data));
  }, []);
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
            {repos
              .filter(
                (repo) =>
                  repo.fork == false && repo.homepage && repo.has_wiki === true,
              )
              .map((repo) => (
                <CardProject data={repo} key={repo.id} />
              ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
