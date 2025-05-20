import React from 'react';

import style from './Switch.module.scss';
import { buildClasses } from '@/lib/utils';
import { modeLabels } from '@/lib/consts';

interface Props {
  mode: Mode;
  switchMode: () => void;
}
export default function Switch({ mode, switchMode }: Props) {
  return (
    <div className={buildClasses(style.container, 'noprint')}>
      <button aria-label='Mode switch' onClick={switchMode}>
        {Object.entries(modeLabels).find(([m]) => m !== mode)![1]}
      </button>
    </div>
  );
}
