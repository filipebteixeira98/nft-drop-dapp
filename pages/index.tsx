import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-red-500 text-4xl font-bold">
        Welcome to the NFT Drop
      </h1>
    </div>
  )
}

export default Home
