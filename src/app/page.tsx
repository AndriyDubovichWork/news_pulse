'use client';
import axios from 'axios';
import styles from './Home.module.scss';

export default function Home() {
  axios
    .get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NEXT_PUBLIC_apiKey}`
    )
    .then((data) => {
      console.log(data.data.results);
    });
  return <main className={styles.Home}>hello</main>;
}
