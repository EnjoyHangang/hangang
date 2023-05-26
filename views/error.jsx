import DefaultLayout from './layouts/default';

import React from 'react';

const Error = ({ err }) => {
  return (
    <DefaultLayout>
      <div>{err}</div>
      <a href="/">메인페이지</a>
    </DefaultLayout>
  );
};

export default Error;
