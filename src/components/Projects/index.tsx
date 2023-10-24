import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { api, apiGitHub } from '../../lib/axios';
import CardProject from '../Card/CardProject';
import { Repos } from '@/@types/repos';

const Projects = () => {
  const [repos, setRepos] = useState<Repos[]>([]);

  useEffect(() => {
    //Função para verificar se a screenshot do repositório já existe no imgur
    const checkUrlScreenshot = async (url: string, title: string) => {
      try {
        const urlScreenshot = await api.get(`/screenshot?title=${title}`);

        if (urlScreenshot.status === 200) {
          return urlScreenshot.data as string;
        }
      } catch (error) {
        return await postUrlScreenshot(url, title);
      }
    };

    //Função para postar a screenshot do repositório no imgur
    const postUrlScreenshot = async (
      url: string,
      title: string,
    ): Promise<string | null> => {
      const data = await api.post<string>(
        `/screenshot?url=${url}&title=${title}`,
      );
      if (data.status === 200) {
        return data.data;
      }
      return null;
    };
    //Função para requisitar os repositórios do GitHub e adicionar as URLs das screenshots
    const getRepos = async () => {
      //Requisitando os repositórios do GitHub
      const { data: response } = await apiGitHub.get<Repos[]>(
        '/users/gabrielbrandaosales/repos',
      );

      //Filtrando os repositórios
      const filteredRepos = response.filter(
        (repo) =>
          !repo.fork &&
          repo.homepage &&
          repo.has_wiki &&
          repo.visibility === 'public' &&
          repo.name !== 'my-portfolio',
      );

      //Adicionando a screenshot de cada repositório
      const filteredReposWithUrl = await Promise.all(
        filteredRepos.map(async (repo) => {
          const urlScreenshot = await checkUrlScreenshot(
            repo.homepage as string,
            repo.name,
          );
          return { ...repo, screenshot: urlScreenshot };
        }),
      );

      setRepos(filteredReposWithUrl as Repos[]);
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
