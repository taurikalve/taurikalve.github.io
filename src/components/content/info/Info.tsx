import React from 'react';
import { buildClasses } from '@/lib/utils';
import { modeLabels } from '@/lib/consts';
import style from './Info.module.scss';

import myPic from './assets/myPic.png';
import { ReactComponent as LinkedinIcon } from './assets/linkedin.svg';
import { ReactComponent as GithubIcon } from './assets/github.svg';
import { ReactComponent as EmailIcon } from './assets/email.svg';
import { ReactComponent as PhoneIcon } from './assets/phone.svg';
import { ReactComponent as AddressIcon } from './assets/address.svg';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  mode: Mode;
}

export default function Info({ mode, className, ...rest }: Props) {
  return (
    <div className={buildClasses(style.container, className)} {...rest}>
      <div className={style.img}>
        <img src={myPic} alt='Tauri Kalve' />
      </div>
      <div className={style.info}>
        <h1>Tauri Kalve</h1>
        <h2>{modeLabels[mode]} Web Developer</h2>
        <div>
          <GithubIcon className={buildClasses(style.icon, style.fill)} />
          <a
            href='https://github.com/taurikalve'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='noprint'>GitHub</span>
            <span className='onlyprint'>github.com/taurikalve</span>
          </a>
        </div>
        <div>
          <LinkedinIcon className={buildClasses(style.icon, style.fill)} />
          <a
            href='https://www.linkedin.com/in/taurikalve'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='noprint'>LinkedIn</span>
            <span className='onlyprint'>linkedin.com/in/taurikalve</span>
          </a>
        </div>
        <div>
          <EmailIcon className={buildClasses(style.icon, style.fill)} />
          <a href='mailto:kalvetauri@gmail.com'>kalvetauri@gmail.com</a>
        </div>
        <div>
          <PhoneIcon className={buildClasses(style.icon, style.fill)} />
          <a href='tel:+37253054533'>+372 5305 4533</a>
        </div>
        <div>
          <AddressIcon className={buildClasses(style.icon, style.stroke)} />
          <span>Keila, Harju county, Estonia</span>
        </div>
      </div>
    </div>
  );
}
