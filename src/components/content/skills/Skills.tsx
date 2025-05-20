import React from 'react';
import { buildClasses } from '@/lib/utils';
import Block from '@/components/block/Block';
import style from './Skills.module.scss';

const primarySkills: {
  label: string;
  level: number; // 1-100
}[] = [
  { label: 'TypeScript / JavaScript', level: 100 },
  { label: 'Node.js', level: 100 },
  { label: 'React', level: 100 },
  // { label: 'Next.js', level: 100 },
  { label: 'MongoDB', level: 95 },
  { label: 'Docker', level: 95 },
  // { label: 'Linux', level: 90 },
  // { label: 'Shell / Bash', level: 90 },
  { label: 'PostgreSQL', level: 90 },
  { label: 'MariaDB / MySQL', level: 90 },
  { label: 'REST', level: 100 },
  { label: 'GraphQL', level: 85 },
  { label: 'Sass / SCSS', level: 100 },
].sort((a, b) => b.level - a.level);
const additionalSkills: string[] = [
  'PHP',
  'Java',
  'Python',
  'Go',
  'Shell / Bash',
  'HTML5 / CSS',
  'Web scraping',
  'Web design',
  'Next.js',
  'Fastify',
  'Express',
  'Svelte',
  'Angular',
  'Vue.js',
  'WebSockets',
  'Puppeteer / Playwright',
  'DevOps',
  // 'MariaDB / MySQL',
  // 'Windows',
  // 'jQuery',
  // 'Google Analytics',
  'WordPress',
  'Nginx',
  'Traefik',
  'Webpack',
];

export default function Skills(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Block label='Skills' {...props}>
      <div className={style.container}>
        <div className={buildClasses(style.block, style.primary)}>
          <h3>Primary</h3>
          <ul>
            {primarySkills.map(({ label, level }) => (
              <li key={label} style={{ width: `${level}%` }}>
                {label}
              </li>
            ))}
          </ul>
        </div>
        <div className={buildClasses(style.block, style.additional)}>
          <h3>Additional</h3>
          <ul>
            {additionalSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </Block>
  );
}
