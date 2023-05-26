import DefaultLayout from './layouts/default';

import React from 'react';

const Error = ({ err }) => {
  return (
    <DefaultLayout>
      <div>{err}</div>
    </DefaultLayout>
  );
};

export default Error;
