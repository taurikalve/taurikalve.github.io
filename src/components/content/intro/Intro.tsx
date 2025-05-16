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
        I'm a Full-Stack Web Developer with 12 years of experience. I have
        extensive experience creating and managing microservices architecture
        web applications. I specialize in leading projects end-to-end from
        inital planning to front-end development and deployment.
      </p>
      <p>
        I'm passionate about delivering high-quality products and constantly
        refining my skills to improve both productivity and code quality. I'm
        now seeking a role where I can focus on what I love doing most -
        creating solutions that exceed expectations.
      </p>
    </div>
  );
}
