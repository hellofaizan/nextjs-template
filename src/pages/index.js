import React from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const res = await fetch('YOUR_API_URL')
  const data = await res.json()

  return {
    props: { data },  
  }
}

const Home = ({data}) => {  
  console.log(data)
  
  return (
    <>
    <div>
      <p className="text-3xl font-bold underline">
        Hello World
      </p>
    </div>
    </>
  )
}

export default Home