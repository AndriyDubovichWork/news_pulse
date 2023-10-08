'use client';

import React from 'react';
import style from './ProfileEdit.module.scss';
import ArrowedLink from '../../components/ArrowedLink/ArrowedLink';
import Input from '../../components/styledInputs/Input/Input';
import UserInput from '../../components/styledInputs/UserInput/UserInput';
import FileInput from '../../components/styledInputs/FileInput/FileInput';
import TextArea from '../../components/styledInputs/TextArea/TextArea';
import Button from '../../components/styledInputs/Button/Button';
import { useSession } from 'next-auth/react';

function ProfileEdit() {
  const { data: session } = useSession();
  const user = session?.user;
  const fullName = user?.name?.split(' ');
  const userName = user?.email?.split('@')[0];

  return (
    <main className={style.profile}>
      <ArrowedLink current='Profile Edit' />
      <div className={style.Inputs}>
        <UserInput
          input={<Input defaultValue={fullName?.[0] || 'first name'} />}
          title='First Name'
        />
        <UserInput
          input={<Input defaultValue={fullName?.[1] || 'last name'} />}
          title='Last Name'
        />
        <UserInput
          input={<Input defaultValue={userName || 'user name'} />}
          title='User Name'
        />
        <UserInput input={<Input />} title='Old Password' />
        <UserInput input={<Input />} title='New Password' />
        <UserInput
          input={<Input defaultValue={user?.email || 'user name'} />}
          title='Email'
        />

        <UserInput
          input={<FileInput />}
          wideArea={'3 / 1 / 4 / 4'}
          title='Add Banner'
        />

        <UserInput
          input={<TextArea />}
          wideArea={'4 / 1 / 5 / 3'}
          title='Explanation'
        />
        <UserInput input={<FileInput />} title='Add Image' />
      </div>
      <Button
        value='save'
        className={style.Button}
        snackBarMessage={'snackBarMessage'}
      />
    </main>
  );
}

export default ProfileEdit;
