'use client';

import { FC } from 'react';
import styles from './keypad.module.css';

interface KeypadProps {
  onKeyPress: (key: string) => void;
  isLoading?: boolean;
}

const Keypad: FC<KeypadProps> = ({ onKeyPress, isLoading }) => {
  // Add two empty strings before '0' and 'X' to create empty cells
  const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'x'];

  return (
    <div className={styles.keypad}>
      {keys.map((key, index) =>
        key === '' ? (
          <div key={index} />
        ) : (
          <button
            key={index}
            className={styles.button}
            onClick={() => onKeyPress(key)}
            disabled={isLoading}>
            {key}
          </button>
        )
      )}
    </div>
  );
};

export default Keypad;