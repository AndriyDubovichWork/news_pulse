import axios from 'axios';

export default function getMostPopularNews() {
  return (
    axios
      .get(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NEXT_PUBLIC_apiKey}`
      )
      // .catch((e) => {
      //   throw new Error(e.message);
      // })
      .then((data) => {
        if (data.status !== 200) {
          throw new Error("couldn't get news");
        }

        return data.data.results;
      })
  );
}
