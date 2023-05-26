import React from 'react';
import DefaultLayout from './layouts/default';

const Hangang = ({ data }) => {
  console.log('props.data: ', data);
  return (
    <DefaultLayout>
      <p>한강서비스</p>
      <form action="/temps/datas" method="POST">
        <button>한강의 온도는?</button>
      </form>
      {data
        ? data.map((data) => {
            return (
              <div key={data['SITE_ID']}>
                <h2>{data['SITE_ID']}부근</h2>
                <p>{data['W_TEMP']}도</p>
              </div>
            );
          })
        : ''}
    </DefaultLayout>
  );
};

export default Hangang;
