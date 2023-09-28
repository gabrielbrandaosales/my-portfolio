import React, { FC, ReactNode } from 'react';
import style from './style.module.scss';

interface MainProps {
  children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return <main className={style.container}>{children}</main>;
};

export default Main;
