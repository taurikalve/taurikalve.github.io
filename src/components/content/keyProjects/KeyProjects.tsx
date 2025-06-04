import React from 'react';
import style from './KeyProjects.module.scss';
import ListBlock from '@/components/listBlock/ListBlock';

const projects: { name: string; url: string; points: string[] }[] = [
  {
    name: 'KVotsing',
    url: 'kvotsing.ee',
    points: [
      'Project goal was to aggregate Estonian property listings into a single place.',
      'Used technologies: React (Next.js), Node.js (Fastify), MongoDB, Docker, Traefik.',
      'Features a crawler app controlled docker browser swarm.',
      'Crawling and web apps are designed to run on separate hosts.',
      'Monorepo that utilizes npm workspaces to minimize code duplication.',
    ],
  },
  {
    name: 'Naissaar',
    url: 'naissaar.ee',
    points: [
      'Project goal was to provide an introductory outlet for tourists and a community portal for the people of the island.',
      'Built on MERN stack. Public front-end uses Next.js, private front-end is a React SPA.',
      'Includes a fully featured purpose-built CMS with a forum.',
    ],
  },
];

export default function KeyProjects(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <ListBlock
      label='Key Projects'
      list={projects.map(({ name, url, points }) => ({
        name,
        pre: (
          <a
            className={style.site}
            href={`https://${url}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {url}
          </a>
        ),
        list: points,
      }))}
      {...props}
    />
  );
}
