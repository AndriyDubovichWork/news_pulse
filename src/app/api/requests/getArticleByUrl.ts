import axios from 'axios';
import React from 'react';

async function getArticleByUrl(url: string) {
  return await axios
    .get(`https://news-pulse-livid.vercel.app/api/article?url=${url}`)
    .then((res) => {
      return res.data;
    });
}

export default getArticleByUrl;
