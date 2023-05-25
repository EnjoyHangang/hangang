import React from 'react';

const index = ({ name }) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{name}</title>
      </head>
      <body>
        <div>{name}</div>
      </body>
    </html>
  );
};

export default index;
