import axios from 'axios';

export default function getMostPopularNews() {
  return axios
    .get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NEXT_PUBLIC_apiKey}`
    )
    .then((data) => {
      return data.data.results;
    });
}
