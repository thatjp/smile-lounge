import React from 'react';
import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width" />
    <meta charSet="utf-8" />
    {/* <link rel="shortcut icon" href="/static/favicon.png" /> */}
    <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" />

    <title>Smile Lounge</title>
  </Head>
);

export default Meta;
