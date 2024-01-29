'use client';

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.scss';

function BackButton() {
  const router = useRouter();
  return (
    <button
      className={styles.button}
      type="button"
      onClick={() => router.back()}
    >
      Back
    </button>
  );
}

export default BackButton;
