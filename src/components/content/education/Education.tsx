import React from 'react';
import style from './Education.module.scss';
import Block from '@/components/block/Block';

const education: {
  school: string;
  level: string;
  startDate: string;
  endDate: string;
}[] = [
  // {
  //   school: 'Keila Kool',
  //   level: 'Basic education',
  //   startDate: '2000',
  //   endDate: '2005',
  // },
  // {
  //   school: 'Saue Kool',
  //   level: 'Basic education / Secondary education',
  //   startDate: '2005',
  //   endDate: '2012',
  // },
  {
    school: 'Tallinn University of Technology',
    level: 'IT - telecom, Bachelors',
    startDate: '2012',
    endDate: '...',
  },
  {
    school: 'Tallinn University of Technology',
    level: 'Business, Bachelors',
    startDate: '2013',
    endDate: '...',
  },
];

export default function Education(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Block label='Education' {...props}>
      <div className={style.container}>
        <ul>
          {education.map(({ school, level, startDate, endDate }, i) => (
            <li key={i}>
              <div className={style.school}>{school}</div>
              {/* <div className={style.details}> */}
              <div>{level}</div>
              <div className={style.time}>
                <span>{startDate}</span> - <span>{endDate}</span>
              </div>
              {/* </div> */}
            </li>
          ))}
        </ul>
      </div>
    </Block>
  );
}
