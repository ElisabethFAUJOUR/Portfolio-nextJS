'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './FadeInSection.module.scss';

interface FadeInSectionProps {
  children: React.ReactNode;
  customClass?: string;
  id: string;
}

function FadeInSection({ children, customClass, id }: FadeInSectionProps) {
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
    <section
      ref={sectionRef}
      className={`${customClass} ${styles.fadeIn} ${isVisible ? styles.isVisible : ''}`}
      id={id}
    >
      {children}
    </section>
  );
}

export default FadeInSection;
