import React from 'react';
import DefaultLayout from './layouts/default';

const Index = ({ needLogin }) => {
  return (
    <DefaultLayout>
      {needLogin ? (
        <>
          <h1>한강물온도</h1>
          <form id="login" method="POST" action="/users/auth">
            <label htmlFor="userid">ID</label>
            <input type="text" name="userid" id="userid" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button>submit</button>
          </form>
          <a href="/users/signup">
            <button>회원가입</button>
          </a>
        </>
      ) : (
        <>
          <h2>로그인</h2>
        </>
      )}
    </DefaultLayout>
  );
};

export default Index;
