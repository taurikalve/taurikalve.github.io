import React from 'react';
import style from './KeyProjects.module.scss';
import ListBlock from '@/components/listBlock/ListBlock';

const projects: {
  name: string;
  url: string;
  goal: string;
  points: string[];
}[] = [
  {
    name: 'KVotsing',
    url: 'kvotsing.ee',
    goal: "Project's goal was to aggregate Estonian property listings into a single place.",
    points: [
      'Used technologies: React (Next.js), Node.js (Fastify), MongoDB, Docker, Traefik.',
      'Features a crawler app controlled docker browser swarm using dockerode.',
      'Crawling and web apps are designed to run on separate hosts.',
      // 'Monorepo that utilizes npm workspaces to minimize code duplication.',
      'Utilizes LLM APIs to update scrapers.',
    ],
  },
  {
    name: 'Naissaar',
    url: 'naissaar.ee',
    goal: "Project's goal was to provide an introductory outlet for tourists and a community portal for the people of the island.",
    points: [
      'Built on MERN stack. Public front-end uses Next.js, private front-end is a React SPA.',
      'A fully-featured purpose-built CMS with a forum.',
    ],
  },
];

export default function KeyProjects(
  props: Exclude<React.HTMLAttributes<HTMLDivElement>, 'className'>,
) {
  return (
    <ListBlock
      {...props}
      className={style.container}
      label='Key Projects'
      list={projects.map(({ name, url, goal, points }) => ({
        name,
        hooks: {
          headPostName: (
            <a
              className={style.site}
              href={`https://${url}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {url}
            </a>
          ),
          preList: <p>{goal}</p>,
        },
        list: points,
      }))}
    />
  );
}
