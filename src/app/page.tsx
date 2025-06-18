'use client';

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Keypad from '@/components/keypad';
import PinMask from '@/components/pinmask';

export default function Home() {
  const [pin, setPin] = useState<string[]>(Array(4).fill(''));
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validated, setValidated] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [lockTime, setLockTime] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLocked && lockTime > 0) {
      timer = setInterval(() => {
        setLockTime((t) => {
          if (t <= 1) {
            setIsLocked(false);
            setAttempts(0);
            clearInterval(timer);
            setError(null);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isLocked, lockTime]);

  const handleKeyPress = (key: string) => {
    if (isLocked || isLoading) return;
    setError(null);

    if (key.toUpperCase() === 'X') {
      setPin(prev => {
        const newPin = [...prev];
        const lastFilledIndex = newPin.findLastIndex(digit => digit !== '');
        if (lastFilledIndex !== -1) {
          newPin[lastFilledIndex] = '';
        }
        return newPin;
      });
      return;
    }

    setPin(prev => {
      const newPin = [...prev];
      const firstEmptyIndex = newPin.indexOf('');
      if (firstEmptyIndex !== -1) {
        newPin[firstEmptyIndex] = key;
      }
      if (newPin.every(digit => digit !== '')) {
        validatePin(newPin);
      }
      return newPin;
    });
  };

  const validatePin = async (pin: string[]) => {
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (pin.join('') === '1234') {
      setValidated(true);
      setPin(Array(4).fill(''));
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) {
        setIsLocked(true);
        setLockTime(30);
        setError('You entered the wrong code 3 times.');
      } else {
        setError(`Incorrect code. Try again.`);
      }
      setPin(Array(4).fill(''));
    }

    setIsLoading(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {validated && (
          <div className={styles.welcome}>
            <h1>Welcome!</h1>
            <p>You entered the correct PIN code</p>
          </div>
        )}

        {!validated && (
          <div className={styles.blocked}>
            <h2>Enter your code</h2>
            <PinMask pin={pin} />
            <div className={styles.error}>
              {error}
              {isLocked && lockTime > 0 && (
                <div>Please wait {lockTime} {lockTime === 1 ? 'second' : 'seconds'} before trying again.</div>
              )}
            </div>
            <Keypad onKeyPress={handleKeyPress} isLoading={isLoading || isLocked} />
          </div>
        )}
      </div>
    </div>
  );
}
