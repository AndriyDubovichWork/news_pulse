import React from 'react';
import style from './ProfileEdit.module.scss';
import ArrowedLink from '../components/ArrowedLink/ArrowedLink';
import Input from '../components/Input/Input';
import UserInput from '../components/UserInput/UserInput';
import FileInput from '../components/FileInput/FileInput';

function ProfileEdit() {
  return (
    <main className={style.profile}>
      <ArrowedLink current='Profile Edit' />
      <div className={style.Inputs}>
        <UserInput input={<Input />} title='First Name' />
        <UserInput input={<Input />} title='Last Name' />
        <UserInput input={<Input />} title='User Name' />
        <UserInput input={<Input />} title='Old Password' />
        <UserInput input={<Input />} title='New Password' />
        <UserInput input={<Input />} title='Email' />

        {/* ToDo fix is wide  */}
        <UserInput input={<FileInput />} isWide title='Add Banner' />
      </div>
    </main>
  );
}

export default ProfileEdit;
