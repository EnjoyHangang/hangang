import React from 'react';
import DefaultLayout from './layouts/default';

const Index = ({ title }) => {
  return (
    <DefaultLayout title={title}>
      <div>{title}</div>
      <form>
        <input type="text" />
        <button>submit</button>
      </form>
    </DefaultLayout>
  );
};

export default Index;
