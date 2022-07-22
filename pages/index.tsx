import React from 'react';
import Head from 'next/head'
import Image from 'next/image'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Om Moradia - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-4xl">
        Hello World
      </div>

    </div>
  )
}

export default Home
