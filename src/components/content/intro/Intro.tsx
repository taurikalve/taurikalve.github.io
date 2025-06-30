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
      {mode === 'full' ? (
        <p>
          I'm a Full-Stack Engineer with 12 years of experience building
          dynamic, user-focused web applications. I specialize in developing
          responsive front-end interfaces with TypeScript and React, and
          architecting scalable back-end systems using Node.js, REST/GraphQL
          APIs, and MongoDB/SQL. My expertise includes designing microservices
          architectures, building robust APIs, and implementing CI/CD pipelines
          to support fast, reliable deployments.
        </p>
      ) : (
        <p>
          I'm a Front-End Developer with 12 years of experience creating
          engaging, user-centric web interfaces - supported by a strong
          foundation in full-stack development. I specialize in building
          responsive, accessible front ends with TypeScript and React, and
          collaborate effectively on back-end systems using Node.js,
          REST/GraphQL APIs, and MongoDB/SQL. My background includes performance
          optimization, design system implementation, and seamless integration
          across modern CI/CD pipelines.
        </p>
      )}

      <p>
        I'm passionate about writing clean, efficient code and delivering
        high-quality solutions that delight users and scale seamlessly. Whether
        it's enhancing front-end performance or architecting full-stack systems,
        I thrive on solving complex challenges and continuously refining my
        skills.{' '}
        {/*I'm seeking Front-End or Full-Stack Developer roles where I can
        leverage my expertise to build innovative and impactful web experiences. */}
      </p>
    </div>
  );
}
