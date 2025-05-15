import React from 'react';
import ListBlock from '@/components/listBlock/ListBlock';
import style from './Experience.module.scss';

const experiences: {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  tasks: string[];
}[] = [
  {
    role: 'Full-Stack Web Developer / CTO',
    company: 'Digiway',
    startDate: 'October 2013',
    endDate: 'April 2025',
    tasks: [
      'Creation and management of JS/TS-based microservices architecture applications',
      'Creation and management of dozens of WordPress sites',
      'Web design',
      'DevOps',
      'Digital marketing',
      'IT consultancy',
    ],
  },
];

export default function Experience(
  props: React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <ListBlock
      label='Experience'
      list={experiences.map(({ role, company, startDate, endDate, tasks }) => ({
        name: company,
        pre: (
          <>
            <h4>{role}</h4>
            <div className={style.date}>
              <span>{startDate}</span> - <span>{endDate || ''}</span>
            </div>
          </>
        ),
        list: tasks,
      }))}
      {...props}
    />
  );
}
