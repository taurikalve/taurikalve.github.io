import React from 'react';
import { buildClasses } from '@/lib/utils';
import style from './Block.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
}

export default function Block({ label, children, className, ...rest }: Props) {
  return (
    <div {...rest} className={buildClasses(style.container, className)}>
      <h2>{label}</h2>
      {children}
    </div>
  );
}
