import React from 'react';
import { buildClasses } from '@/lib/utils';
import style from './Intro.module.scss';

export default function Intro({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  //
  return (
    <div className={buildClasses(style.container, className)} {...rest}>
      <p>
        I'm a Full-Stack Developer with 12 years of experience building dynamic,
        user-focused web applications. I specialize in crafting responsive
        front-end interfaces with React and TypeScript, while also designing
        scalable back-end systems using Node.js, REST/GraphQL and MongoDB/SQL.
        My expertise includes developing microservices architectures and
        optimizing end-to-end workflows, from pixel-perfect UIs to robust APIs
        and CI/CD pipelines.
      </p>
      <p>
        I'm passionate about writing clean, efficient code and delivering
        high-quality solutions that delight users and scale seamlessly. Whether
        it's enhancing front-end performance or architecting full-stack systems,
        I thrive on solving complex challenges and continuously refining my
        skills. I'm seeking Front-End or Full-Stack Developer roles where I can
        leverage my expertise to build innovative and impactful web experiences.
      </p>
    </div>
  );
}
