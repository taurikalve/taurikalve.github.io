import React from 'react';

// import logo from '@/logo.svg';
import style from '@/App.module.scss';

import Info from '@/components/content/info/Info';
import Intro from '@/components/content/intro/Intro';
import Skills from '@/components/content/skills/Skills';
import Experience from '@/components/content/experience/Experience';
import KeyProjects from '@/components/content/keyProjects/KeyProjects';
import Education from '@/components/content/education/Education';

function App() {
  return (
    <div className={style.app}>
      {/* <header>
        <a href='#info'>Info</a>
        <a href='#skills'>Skills</a>
        <a href='#experience'>Experience</a>
        <a href='#accomplishments'>Accomplishments</a>
        <a href='#education'>Education</a>
      </header> */}
      <div className={style.container}>
        <div className={style.inner}>
          <main>
            <Info id='info' className={style.info} />
            <Intro className={style.intro} />
            <Experience id='experience' className={style.experience} />
            <KeyProjects className={style.keyProjects} />
          </main>
          <aside className={style.side}>
            <Skills id='skills' className={style.skills} />
            <Education className={style.education} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
