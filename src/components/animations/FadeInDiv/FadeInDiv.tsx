'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './FadeInDiv.module.scss';

interface FadeInSectionProps {
  children: React.ReactNode;
  customClass?: string;
}

function FadeInDiv({ children, customClass }: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (sectionRef.current) {
              observer.unobserve(sectionRef.current);
            }
          }
        });
      },
      { threshold: 0.2, root: null, rootMargin: '0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${customClass} ${styles.fadeIn} ${isVisible ? styles.isVisible : ''}`}
    >
      {children}
    </div>
  );
}

export default FadeInDiv;
