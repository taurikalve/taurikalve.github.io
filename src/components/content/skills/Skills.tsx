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
  { label: 'SQL', level: 95 },
  // { label: 'MariaDB / MySQL', level: 85 },
  { label: 'REST', level: 100 },
  { label: 'GraphQL', level: 90 },
  { label: 'Sass / SCSS', level: 100 },
].sort((a, b) => b.level - a.level);

const aiSkills: (React.ReactNode | string)[] = [
  <>Hugging Face</>,
  'Edge AI & Local Inference',
  'Model Fine-tuning & Adaptation',
  'Quantization & Distillation',
  'Python',
];

const additionalSkills: (React.ReactNode | string)[] = [
  'Linux',
  'Amazon Web Services',
  'Google Cloud Platform',
  'PHP',
  'Go',
  'Shell / Bash',
  'Web crawling',
  'UI/UX design',
  'Next.js',
  'Svelte',
  // 'Angular',
  // 'Vue.js',
  'Fastify',
  'Express',
  // 'NestJS',
  // 'React Native',
  'WebSockets',
  'Puppeteer',
  'DevOps',
  'Testing',
  // 'Jest',
  'PostgreSQL',
  'MariaDB / MySQL',
  // 'Windows',
  // 'jQuery',
  // 'WordPress',
  'Search engine optimization',
  // 'Nginx',
  'Webpack',
  'Git',
  'GitHub Actions',
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
          <h3>AI & Machine Learning</h3>
          <ul>
            {aiSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className={buildClasses(style.block, style.additional)}>
          <h3>Additional</h3>
          <ul>
            {additionalSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </Block>
  );
}
