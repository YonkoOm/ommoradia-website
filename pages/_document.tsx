import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="description" content="Om Moradia's Portfolio" />
        <meta name="author" content="Om Moradia" />
        <meta property="og:title" content="Om Moradia's Website" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
