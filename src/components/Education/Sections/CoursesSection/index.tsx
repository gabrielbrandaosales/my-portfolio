import React from 'react';
import style from './style.module.scss';
export type TimeMeasurementUnit = 'y' | 'm' | 'd' | 'h' | 'min';

// export type Measure = ${number}${TimeMeasurementUnit} | 'auto' | number;

interface Curso {
  name: string;
  time: string;
}

interface Props {
  courses: Curso[];
}

const CoursesSection: React.FC<Props> = ({ courses }) => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Courses & Certificates</h1>
      {courses.map(({ name, time }) => (
        <div className={style.coursesGroup} key={name}>
          <p className={style.courseName}>{name}</p>
          <p className={style.courseTime}>{time}</p>
        </div>
      ))}
    </div>
  );
};

export default CoursesSection;
