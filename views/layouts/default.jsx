import React from 'react';

const DefaultLayout = (props) => {
  return (
    <html>
      <head>
        <title>Hangang</title>
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default DefaultLayout;
