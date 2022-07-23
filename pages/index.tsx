import type { NextPage } from 'next';
import { useTimer } from 'react-timer-hook';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Home: NextPage = (expiryTimestamp: any) => {

  const {
    seconds,
    minutes,
    // hours,
    // days,
    isRunning,
    start,
    pause,
    // resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => audio.play() });

  const bgColor = isRunning ? 'blue' : 'red';

  const [audio, setAudio] = useState(null);
  useEffect(() => {
    setAudio(new Audio('alert.mp3'));
    // only run once on the first render on the client
  }, []);
  const play = () => {
    audio.play();
  };

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Pomodoro Timer</title>
          <meta name="description" content="Emi's Pomodoro Timer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <button onClick={play}>Play</button>
          <div className={styles.logo}>\(^▽^)/</div>
          <h1 className={styles.ttl}>Pomodoro Timer</h1>
          <p className={styles.message} style={{ backgroundColor: bgColor }}>{isRunning ? 'Working time!' : 'Paused or Rest'}</p>
          <div className={styles.time}><span>{minutes}</span>:<span>{seconds}</span></div>
          <div className={styles.buttons}>
            <button onClick={() => {
              // Restarts to 25 minutes timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + 60 * 25);
              restart(time);
            }}>Set&Start 25mins</button>
            <button onClick={() => {
              // Restarts to 25 minutes timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + 60 * 5);
              restart(time);
            }}>Set&Start 5mins</button>
            <button onClick={() => {
              // Restarts to 1sec timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + 1 * 1);
              restart(time);
            }}>Set&Start 1sec</button>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={() => {
              // Restarts to 5 minutes timer
              const time = new Date();
              time.setSeconds(time.getSeconds() + 60 * 5);
              restart(time);
            }}>Restart</button>
          </div>
        </main>

        <p className={styles.gitthublink}>Source Code on Github:
          <Link href="https://github.com/emi-h/my-pomodoroTimer">
            <a> https://github.com/emi-h/my-pomodoroTimer</a>
          </Link>
        </p>

        <footer className={styles.footer}>
          <p>Copyright emi 2022</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
