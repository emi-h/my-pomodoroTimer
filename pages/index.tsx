import type { NextPage } from 'next';
import { useTimer } from 'react-timer-hook';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

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
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  // const alert = () => {
  //   window.alert('Time is up!');
  // };

  const bgColor = isRunning ? 'blue' : 'red';

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Pomodoro Timer</title>
          <meta name="description" content="Emi's Pomodoro Timer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
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
