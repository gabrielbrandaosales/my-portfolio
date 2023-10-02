import { useEffect, useState, useRef } from 'react';
import { ArrowUp } from 'react-feather';
import style from './style.module.scss';

const ScrollToTopButton: React.FC = () => {
  const scrollToTopRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (scrollToTopRef.current) {
      setIsVisible(scrollToTopRef.current.getBoundingClientRect().top < 0);
    }
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
      ref={scrollToTopRef}
      className={`${style.button} ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}>
      <ArrowUp size={24} />
    </div>
  );
};

export default ScrollToTopButton;
