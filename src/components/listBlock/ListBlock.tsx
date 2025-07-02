import React from 'react';
import style from './ListBlock.module.scss';
import Block from '@/components/block/Block';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  list: {
    name: string;
    hooks?: {
      preList?: React.ReactNode;
      postList?: React.ReactNode;
      headPostName?: React.ReactNode;
    };
    list: string[];
  }[];
  containerClass?: string;
}

export default function ListBlock({ list, ...rest }: Props) {
  return (
    <Block {...rest}>
      <ul className={style.container}>
        {list.map(({ name, list, hooks }) => {
          const { headPostName, preList, postList } = hooks ?? {};
          return (
            <li key={name}>
              <div className={style.head}>
                <h3>{name}</h3>
                {headPostName ?? ''}
              </div>
              <div className={style.inner}>
                {preList ?? ''}
                <ul>
                  {list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {postList ?? ''}
              </div>
            </li>
          );
        })}
      </ul>
    </Block>
  );
}
