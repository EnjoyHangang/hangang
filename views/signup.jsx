import React from 'react';
import DefaultLayout from './layouts/default';

const Signup = () => {
  return (
    <DefaultLayout>
      <h1>한강물온도</h1>
      <form id="signup" method="POST" action="/users/signup/submit">
        <label htmlFor="name">name</label>
        <input type="name" name="name" id="name" maxLength={15} />
        <label htmlFor="userid">ID</label>
        <input type="text" name="userid" id="userid" maxLength={20} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>submit</button>
      </form>
    </DefaultLayout>
  );
};

export default Signup;
