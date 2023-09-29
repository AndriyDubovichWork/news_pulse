import React from 'react';
import style from './share.module.scss';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'next-share';

type share = { url: string; quote: string };

export default function Share({ url, quote }: share) {
  return (
    <div className={style.share}>
      <h3>Share</h3>
      <FacebookShareButton url={url} quote={quote}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>
    </div>
  );
}
