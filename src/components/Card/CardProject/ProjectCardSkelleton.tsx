import style from './style.module.scss';
import Skeleton from 'react-loading-skeleton';

const ProjectCardSkelleton = () => {
  return (
    <div className={style.Card}>
      <div className={style.content}>
        <a target="_blank">
          <p className={style.project}>
            <Skeleton width={100} />
          </p>
          <h1 className={style.title}>
            <Skeleton />
          </h1>
        </a>
        <p className={style.topicWrapper}>
          {[...Array(4)].map((item, index) => (
            <Skeleton key={index} width={60} height={37} />
          ))}
        </p>
      </div>
      <a style={{ margin: 'auto 0' }} target="_blank">
        <Skeleton width={241} height={150} />
      </a>
    </div>
  );
};

export default ProjectCardSkelleton;
