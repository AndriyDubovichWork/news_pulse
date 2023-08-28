import React from 'react';
import style from './ArticleContent.module.scss';
import Image from 'next/image';

function ArticleContent() {
  return (
    <div className={style.content}>
      <h1 className={style.title}>
        Don’t wait. The purpose of our lives is to be happy!
      </h1>
      <p className={style.text}>
        Upon arrival, your senses will be rewarded with the pleasant scent of
        lemongrass oil used to clean the natural wood found throughout the room,
        creating a relaxing atmosphere within the space. A wonderful serenity
        has taken possession of my entire soul, like these sweet mornings of
        spring which I enjoy with my whole heart. I am alone, and feel the charm
        of existence in this spot, which was created for the bliss of souls like
        mine. I am so happy, my dear friend, so absorbed in the exquisite.
      </p>
      <div className={style.imageContainer}>
        <Image
          alt='canoe in the middle of the lake pov image'
          src={
            'https://images.unsplash.com/photo-1556213865-7d7377053e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80'
          }
          width={872}
          height={486}
        />
      </div>
      <h1 className={style.title}>
        Not how long, but how well you have lived is the main thing.
      </h1>
      <p className={style.text}>
        When you are ready to indulge your sense of excitement, check out the
        range of water- sports opportunities at the resort’s on-site
        water-sports center. Want to leave your stress on the water? The resort
        has kayaks, paddleboards, or the low-key pedal boats. Snorkeling
        equipment is available as well, so you can experience the ever-changing
        undersea environment. Not only do visitors to a bed and breakfast get a
        unique perspective on the place they are visiting, they have options for
        special packages not available in other hotel settings. Bed and
        breakfasts can partner easily with local businesses for a smoothly
        organized and highly personalized vacation experience. The Fife and Drum
        Inn offers options such as the Historic Triangle Package that includes
        three nights at the Inn, breakfasts, and admissions to historic
        Williamsburg, Jamestown, and Yorktown. Bed and breakfasts also lend
        themselves to romance. Part of the charm of a bed and breakfast is the
        uniqueness; art, décor, and food are integrated to create a complete
        experience. For example, the Fife and Drum retains the colonial feel of
        the area in all its guest rooms. Special features include antique
        furnishings, elegant four poster beds in some guest rooms, as well folk
        art and artifacts from the restoration period of the historic area
        available for guests to enjoy.
      </p>
    </div>
  );
}

export default ArticleContent;
