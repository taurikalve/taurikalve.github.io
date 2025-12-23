import React from 'react';
import { buildClasses } from '@/lib/utils';
import style from './Intro.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mode: Mode;
}

export default function Intro({ className, mode, ...rest }: Props) {
  //
  return (
    <div className={buildClasses(style.container, className)} {...rest}>
      <p>
        Senior Full-Stack Engineer with <b>12 years of experience</b> building
        dynamic, scalable web applications using <b>TypeScript</b>, <b>React</b>{' '}
        and <b>Node.js</b>. I specialize in evolving traditional web
        architectures into intelligent ecosystems.
      </p>
      <p>
        My skillset extends to <b>hybrid AI integration</b>, where I implement
        solutions ranging from standard <b>LLM API consumers</b> to custom{' '}
        <b>self-hosted deployments</b>. I utilize <b>fine-tuned local models</b>{' '}
        to solve privacy-critical (GDPR) challenges and reduce dependency on
        external providers - delivering secure, high-performance web
        applications that leverage the best of both cloud and edge technologies.
      </p>
      {/* <p>
        I'm a Front-End focused Full-Stack Engineer with 12 years of experience
        building dynamic, user-focused web applications. I specialize in
        developing responsive front-end interfaces with TypeScript and React,
        and architecting scalable back-end systems using Node.js, REST/GraphQL
        APIs, and MongoDB/SQL. My expertise includes designing microservices
        architectures, building robust APIs, and implementing CI/CD pipelines to
        support fast, reliable deployments.
      </p> */}

      {/* <p>
        I'm passionate about writing clean, efficient code and delivering
        high-quality solutions that delight users and scale seamlessly. Whether
        it's enhancing front-end performance or architecting full-stack systems,
        I thrive on solving complex challenges and continuously refining my
        skills.{' '}
      </p> */}
      {/* <p>
        I'm passionate about writing clean, efficient code and delivering
        high-quality solutions that delight users and scale seamlessly.
      </p> */}
    </div>
  );
}
