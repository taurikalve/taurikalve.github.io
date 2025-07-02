import React from 'react';
import { buildClasses } from '@/lib/utils';
import style from './Block.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
  containerClass?: string;
}

export default function Block({
  label,
  children,
  containerClass,
  ...rest
}: Props) {
  return (
    <div {...rest} className={buildClasses(style.container, containerClass)}>
      <h2>{label}</h2>
      {children}
    </div>
  );
}
