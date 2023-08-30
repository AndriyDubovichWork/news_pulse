import React from 'react';
import Comment from '@/app/components/Comment/Comment';
import Title from '@/app/components/Title/Title';
import Input from '@/app/components/Input/Input';
import style from './ArticleComments.module.scss';

function ArticleComments() {
  return (
    <div>
      <Title title='Coments' />

      <Comment
        author='Jon Kantner'
        text='When you are ready to indulge your sense of excitement, check out the range of water- sports opportunities at the resort’s on-site water-sports center. Want to leave your stress on the water? The resort has kayaks, paddleboards, or the low-key pedal boats.'
      />
      <Comment
        author='Patricia'
        text='An island (or isle) is an isolated piece of habitat that is surrounded by a dramatically different habitat, such as water. Very small islands such as emergent land features on atolls can be called islets, skerries, cays or keys.'
      />

      <Title title='Add a Comments' />

      <div className={style.input}>
        <Input className={style.input} />
        <Input
          type={'button'}
          style={{ width: '20%', margin: '0 auto' }}
          value='send comment'
        />
      </div>
    </div>
  );
}

export default ArticleComments;
