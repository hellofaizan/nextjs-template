import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Home = () => {  
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.npoint.io/4a8d62649d30ab3f091e', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      });
  }, []);

  if (isLoading) return <div className='w-screen h-screen flex justify-center items-center'>
    <Image src={"/faizan.png"} width={60} height={60} alt="HelloFaizan Splach Screen Logo"></Image>
  </div>

  if (!data) return <div className='w-screen h-screen flex justify-center items-center'>
    <Image src={"/faizan.png"} width={60} height={60} alt="HelloFaizan Splach Screen Logo"></Image>
  </div>

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