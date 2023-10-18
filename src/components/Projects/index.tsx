import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { api, apiGitHub } from '../../lib/axios';
import CardProject from '../Card/CardProject';
import { Repos } from '@/@types/repos';

const Projects = () => {
  const [repos, setRepos] = useState<Repos[]>([]);

  useEffect(() => {
    const getRepos = async () => {
      const { data: response } = await apiGitHub.get<Repos[]>(
        '/users/gabrielbrandaosales/repos',
      );

      const filteredRepos = response.filter(
        (repo) =>
          !repo.fork &&
          repo.homepage &&
          repo.has_wiki &&
          repo.visibility === 'public' &&
          repo.name !== 'my-portfolio',
      );

      const filteredReposWithUrl = await Promise.all(
        filteredRepos.map(async (repo) => {
          const { data: urlScreenshot } = await api.post<string>(
            `/screenshot?url=${repo.homepage}&title=${repo.name}`,
          );
          return { ...repo, screenshot: urlScreenshot };
        }),
      );

      setRepos(filteredReposWithUrl);
    };
    getRepos();
  }, []);

  return (
    <section className={style.container} id="projects">
      <div className={style.content}>
        <span>
          <h1 className={style.title}>Projetos</h1>
        </span>
        <article>
          <p className={style.subtitle}>
            Aqui estão algumas projetos desenvolvidos por mim.
          </p>
          <div className={style.feedProjects}>
            {repos.map((repo) => (
              <CardProject data={repo} key={repo.id} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
