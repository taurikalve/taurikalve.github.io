import React from 'react';
import ListBlock from '@/components/listBlock/ListBlock';
import style from './Experience.module.scss';

const experiences: {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  tasks: React.ReactNode[];
}[] = [
  {
    role: 'Software Engineer',
    company: 'Jutt.ai',
    startDate: 'September 2025',
    endDate: 'now',
    tasks: [
      <>
        <b>Architecting Edge AI Solutions:</b> Designing local-first inference
        pipelines using containerized Hugging Face models hosted on cloud
        services.
      </>,
      <>
        <b>Model Optimization:</b> Implementing quantization and distillation to
        deploy efficient LLMs
      </>,
    ],
  },
  {
    role: 'Full-Stack Engineer / CTO',
    company: 'Digiway',
    startDate: 'October 2013',
    endDate: 'September 2025',
    tasks: [
      // 'Creation and management of dozens of WordPress sites',
      <>
        <b>End-to-End Development:</b> Led the lifecycle of multiple web
        applications from concept to deployment, managing both front-end
        interfaces and back-end architectures.
      </>,
      <>
        <b>Infrastructure & DevOps:</b> Managed Linux-based cloud
        infrastructure, ensuring high availability and automating deployment
        workflows.
      </>,
      // 'Search engine optimization',
      // 'Product ownership',
      // 'IT consultancy',
      // 'FinOps',
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
        hooks: {
          preList: (
            <>
              <h4>{role}</h4>
              <div className={style.date}>
                <span>{startDate}</span> - <span>{endDate || ''}</span>
              </div>
            </>
          ),
        },
        list: tasks,
      }))}
      {...props}
    />
  );
}
