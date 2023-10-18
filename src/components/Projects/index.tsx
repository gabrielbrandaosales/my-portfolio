import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { api, apiGitHub } from '../../lib/axios';
import CardProject from '../Card/CardProject';
import { Repos } from '@/@types/repos';
import { ReposWithURL, ScreenshotResponse } from '@/@types/imgur';

const Projects = () => {
  const [repos, setRepos] = useState<Repos[]>([] as Repos[]);

  useEffect(() => {
    const getRepos = async () => {
      const { data: response } = await apiGitHub.get<Repos[]>(
        '/users/gabrielbrandaosales/repos',
      );

      const filteredRepos = response.filter(
        (repo) =>
          repo.fork === false &&
          repo.homepage &&
          repo.has_wiki === true &&
          repo.visibility === 'public' &&
          repo.name === 'my-portfolio',
      );

      // const filteredReposWithUrl = await Promise.all(
      //   filteredRepos.map(async (repo) => {
      //     const { data: urlScreenshot } = await api.post<string>(
      //       `/screenshot?url=${repo.homepage}&title=${repo.name}`,
      //     );

      //     console.log(urlScreenshot);

      //     return { ...repo, screenshot: urlScreenshot };
      //   }),
      // );

      //Mocado
      const filteredReposWithUrl = [
        {
          id: 691733117,
          node_id: 'R_kgDOKTsCfQ',
          name: 'bikcraft',
          full_name: 'gabrielbrandaosales/bikcraft',
          private: false,
          owner: {
            login: 'gabrielbrandaosales',
            id: 50925360,
            node_id: 'MDQ6VXNlcjUwOTI1MzYw',
            avatar_url: 'https://avatars.githubusercontent.com/u/50925360?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/gabrielbrandaosales',
            html_url: 'https://github.com/gabrielbrandaosales',
            followers_url:
              'https://api.github.com/users/gabrielbrandaosales/followers',
            following_url:
              'https://api.github.com/users/gabrielbrandaosales/following{/other_user}',
            gists_url:
              'https://api.github.com/users/gabrielbrandaosales/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/gabrielbrandaosales/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/gabrielbrandaosales/subscriptions',
            organizations_url:
              'https://api.github.com/users/gabrielbrandaosales/orgs',
            repos_url: 'https://api.github.com/users/gabrielbrandaosales/repos',
            events_url:
              'https://api.github.com/users/gabrielbrandaosales/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/gabrielbrandaosales/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/gabrielbrandaosales/bikcraft',
          description: '🚲 Landing page bikcraft',
          fork: false,
          url: 'https://api.github.com/repos/gabrielbrandaosales/bikcraft',
          forks_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/forks',
          keys_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/teams',
          hooks_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/hooks',
          issue_events_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/events',
          assignees_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/tags',
          blobs_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/languages',
          stargazers_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/stargazers',
          contributors_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/contributors',
          subscribers_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/subscribers',
          subscription_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/subscription',
          commits_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/merges',
          archive_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/downloads',
          issues_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/labels{/name}',
          releases_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/gabrielbrandaosales/bikcraft/deployments',
          created_at: '2023-09-14T19:17:28Z',
          updated_at: '2023-09-14T20:17:46Z',
          pushed_at: '2023-09-14T20:10:34Z',
          git_url: 'git://github.com/gabrielbrandaosales/bikcraft.git',
          ssh_url: 'git@github.com:gabrielbrandaosales/bikcraft.git',
          clone_url: 'https://github.com/gabrielbrandaosales/bikcraft.git',
          svn_url: 'https://github.com/gabrielbrandaosales/bikcraft',
          homepage: 'https://gabrielbrandaosales.github.io/bikcraft/',
          size: 56,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'CSS',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: true,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'main',
          screenshot: 'https://i.imgur.com/yYBGZpv.png',
        },
        {
          id: 622234009,
          node_id: 'R_kgDOJRaJmQ',
          name: 'Dogs',
          full_name: 'gabrielbrandaosales/Dogs',
          private: false,
          owner: {
            login: 'gabrielbrandaosales',
            id: 50925360,
            node_id: 'MDQ6VXNlcjUwOTI1MzYw',
            avatar_url: 'https://avatars.githubusercontent.com/u/50925360?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/gabrielbrandaosales',
            html_url: 'https://github.com/gabrielbrandaosales',
            followers_url:
              'https://api.github.com/users/gabrielbrandaosales/followers',
            following_url:
              'https://api.github.com/users/gabrielbrandaosales/following{/other_user}',
            gists_url:
              'https://api.github.com/users/gabrielbrandaosales/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/gabrielbrandaosales/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/gabrielbrandaosales/subscriptions',
            organizations_url:
              'https://api.github.com/users/gabrielbrandaosales/orgs',
            repos_url: 'https://api.github.com/users/gabrielbrandaosales/repos',
            events_url:
              'https://api.github.com/users/gabrielbrandaosales/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/gabrielbrandaosales/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/gabrielbrandaosales/Dogs',
          description:
            '🐶Web aplicação de Rede Social para pets feito em ReactJS como forma de aprendizado',
          fork: false,
          url: 'https://api.github.com/repos/gabrielbrandaosales/Dogs',
          forks_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/forks',
          keys_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/teams',
          hooks_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/hooks',
          issue_events_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/events',
          assignees_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/tags',
          blobs_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/languages',
          stargazers_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/stargazers',
          contributors_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/contributors',
          subscribers_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/subscribers',
          subscription_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/subscription',
          commits_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/merges',
          archive_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/downloads',
          issues_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/labels{/name}',
          releases_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/gabrielbrandaosales/Dogs/deployments',
          created_at: '2023-04-01T14:15:01Z',
          updated_at: '2023-08-15T17:21:52Z',
          pushed_at: '2023-04-27T22:22:11Z',
          git_url: 'git://github.com/gabrielbrandaosales/Dogs.git',
          ssh_url: 'git@github.com:gabrielbrandaosales/Dogs.git',
          clone_url: 'https://github.com/gabrielbrandaosales/Dogs.git',
          svn_url: 'https://github.com/gabrielbrandaosales/Dogs',
          homepage: 'https://dogs-pearl.vercel.app',
          size: 719,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: true,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ['css', 'javascript', 'reactjs'],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
          screenshot: 'https://i.imgur.com/EkkyPCe.png',
        },
        {
          id: 590571974,
          node_id: 'R_kgDOIzNpxg',
          name: 'E-Commerce',
          full_name: 'gabrielbrandaosales/E-Commerce',
          private: false,
          owner: {
            login: 'gabrielbrandaosales',
            id: 50925360,
            node_id: 'MDQ6VXNlcjUwOTI1MzYw',
            avatar_url: 'https://avatars.githubusercontent.com/u/50925360?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/gabrielbrandaosales',
            html_url: 'https://github.com/gabrielbrandaosales',
            followers_url:
              'https://api.github.com/users/gabrielbrandaosales/followers',
            following_url:
              'https://api.github.com/users/gabrielbrandaosales/following{/other_user}',
            gists_url:
              'https://api.github.com/users/gabrielbrandaosales/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/gabrielbrandaosales/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/gabrielbrandaosales/subscriptions',
            organizations_url:
              'https://api.github.com/users/gabrielbrandaosales/orgs',
            repos_url: 'https://api.github.com/users/gabrielbrandaosales/repos',
            events_url:
              'https://api.github.com/users/gabrielbrandaosales/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/gabrielbrandaosales/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/gabrielbrandaosales/E-Commerce',
          description:
            'Web aplicação de E-Commerce para aprendizado de ReactJS ',
          fork: false,
          url: 'https://api.github.com/repos/gabrielbrandaosales/E-Commerce',
          forks_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/forks',
          keys_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/teams',
          hooks_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/hooks',
          issue_events_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/events',
          assignees_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/tags',
          blobs_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/languages',
          stargazers_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/stargazers',
          contributors_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/contributors',
          subscribers_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/subscribers',
          subscription_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/subscription',
          commits_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/merges',
          archive_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/downloads',
          issues_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/labels{/name}',
          releases_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/gabrielbrandaosales/E-Commerce/deployments',
          created_at: '2023-01-18T18:07:52Z',
          updated_at: '2023-08-15T17:21:25Z',
          pushed_at: '2023-08-24T20:21:59Z',
          git_url: 'git://github.com/gabrielbrandaosales/E-Commerce.git',
          ssh_url: 'git@github.com:gabrielbrandaosales/E-Commerce.git',
          clone_url: 'https://github.com/gabrielbrandaosales/E-Commerce.git',
          svn_url: 'https://github.com/gabrielbrandaosales/E-Commerce',
          homepage: 'https://e-commerce-origamid.vercel.app',
          size: 327,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ['css', 'javascript', 'reactjs'],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'master',
          screenshot: 'https://i.imgur.com/wwpJHRq.png',
        },
        {
          id: 678786393,
          node_id: 'R_kgDOKHV1WQ',
          name: 'Fintech',
          full_name: 'gabrielbrandaosales/Fintech',
          private: false,
          owner: {
            login: 'gabrielbrandaosales',
            id: 50925360,
            node_id: 'MDQ6VXNlcjUwOTI1MzYw',
            avatar_url: 'https://avatars.githubusercontent.com/u/50925360?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/gabrielbrandaosales',
            html_url: 'https://github.com/gabrielbrandaosales',
            followers_url:
              'https://api.github.com/users/gabrielbrandaosales/followers',
            following_url:
              'https://api.github.com/users/gabrielbrandaosales/following{/other_user}',
            gists_url:
              'https://api.github.com/users/gabrielbrandaosales/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/gabrielbrandaosales/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/gabrielbrandaosales/subscriptions',
            organizations_url:
              'https://api.github.com/users/gabrielbrandaosales/orgs',
            repos_url: 'https://api.github.com/users/gabrielbrandaosales/repos',
            events_url:
              'https://api.github.com/users/gabrielbrandaosales/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/gabrielbrandaosales/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/gabrielbrandaosales/Fintech',
          description:
            '📈 Dashboard de resumos financeiros para fins de estudos.',
          fork: false,
          url: 'https://api.github.com/repos/gabrielbrandaosales/Fintech',
          forks_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/forks',
          keys_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/collaborators{/collaborator}',
          teams_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/teams',
          hooks_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/hooks',
          issue_events_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/issues/events{/number}',
          events_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/events',
          assignees_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/branches{/branch}',
          tags_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/tags',
          blobs_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/languages',
          stargazers_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/stargazers',
          contributors_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/contributors',
          subscribers_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/subscribers',
          subscription_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/subscription',
          commits_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/compare/{base}...{head}',
          merges_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/merges',
          archive_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/downloads',
          issues_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/labels{/name}',
          releases_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/gabrielbrandaosales/Fintech/deployments',
          created_at: '2023-08-15T11:26:31Z',
          updated_at: '2023-10-16T23:24:20Z',
          pushed_at: '2023-08-15T17:03:25Z',
          git_url: 'git://github.com/gabrielbrandaosales/Fintech.git',
          ssh_url: 'git@github.com:gabrielbrandaosales/Fintech.git',
          clone_url: 'https://github.com/gabrielbrandaosales/Fintech.git',
          svn_url: 'https://github.com/gabrielbrandaosales/Fintech',
          homepage: 'https://fintech-umber.vercel.app',
          size: 57,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'TypeScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: ['javascript', 'next'],
          visibility: 'public',
          forks: 0,
          open_issues: 0,
          watchers: 0,
          default_branch: 'main',
          screenshot: 'https://i.imgur.com/HRJI7kM.png',
        },
      ];

      setRepos(filteredReposWithUrl as unknown as Repos[]);
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
