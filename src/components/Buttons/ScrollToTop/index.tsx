import { useEffect, useState } from 'react';
import styles from './style.module.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) setIsVisible(true);
    else setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`${styles.button} scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}>
      &#9650;
    </div>
  );
};

export default ScrollToTopButton;
