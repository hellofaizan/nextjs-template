import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {  
  
  return (
    <>
    <Head>
        <title>Next Js Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <p>
        Hello World
      </p>
    </div>
    </>
  )
}

export default Home
