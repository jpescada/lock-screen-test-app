import { FC } from 'react';
import styles from './pinmask.module.css';

interface PinMaskProps {
  pin: string[];
}

const PinMask: FC<PinMaskProps> = ({ pin }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {pin.map((digit, index) => (
        <div
          key={index}
          className={digit ? `${styles.pinDigit} ${styles.filled}` : styles.pinDigit} />
      ))}
    </div>
  );
}

export default PinMask;