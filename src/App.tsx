import React from 'react';

import style from '@/App.module.scss';
import { isDev, modeLabels } from '@/lib/consts';

import Info from '@/components/content/info/Info';
import Intro from '@/components/content/intro/Intro';
import Skills from '@/components/content/skills/Skills';
import Experience from '@/components/content/experience/Experience';
import KeyProjects from '@/components/content/keyProjects/KeyProjects';
import Education from '@/components/content/education/Education';
import Switch from '@/components/switch/Switch';

function App() {
  const [mode, setMode] = React.useState<Mode>(
    (window.location.hash.slice(1) as Mode) || 'full',
  );

  const switchMode = React.useCallback(() => {
    const nextMode = (Object.keys(modeLabels) as Mode[]).find(
      (m) => m !== mode,
    )!;
    setMode(nextMode);
    window.location.hash = nextMode;
  }, [mode, setMode]);

  if (isDev) console.log('mode:', mode);

  return (
    <div className={style.app}>
      <div className={style.container}>
        <div className={style.inner}>
          <main>
            <Info className={style.info} mode={mode} />
            <Intro className={style.intro} mode={mode} />
            <Experience className={style.experience} />
            <KeyProjects className={style.keyProjects} />
          </main>
          <aside className={style.side}>
            <Skills className={style.skills} />
            <Education className={style.education} />
          </aside>
        </div>
      </div>
      <Switch mode={mode} switchMode={switchMode} />
    </div>
  );
}

export default App;
