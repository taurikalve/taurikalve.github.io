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
        extensive experience creating microservices architecture apps and can
        handle everything from planning the project to writing front-end.
      </p>
      <p>
        I like to drive for excellence and I'm constantly looking for new ways
        to improve both my productivity and the quality of my output.
      </p>
      <p>
        I'm looking for a job, where I can focus on what I love doing most -
        delivering products that exceed expectations.
      </p>
    </div>
  );
}
