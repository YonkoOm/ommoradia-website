import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/one-piece.ico" />
      </Head>
      <body className="bg-[#0f102a]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
