import React from 'react';
import style from './ListBlock.module.scss';
import Block from '@/components/block/Block';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  list: {
    name: string;
    pre?: React.ReactNode;
    list: string[];
    post?: React.ReactNode;
  }[];
}

export default function ListBlock({ list, ...rest }: Props) {
  return (
    <Block {...rest}>
      <ul className={style.container}>
        {list.map(({ name, pre, list, post }) => (
          <li key={name}>
            <h3>{name}</h3>
            <div className={style.inner}>
              {pre ?? ''}
              <ul>
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {post ?? ''}
            </div>
          </li>
        ))}
      </ul>
    </Block>
  );
}
