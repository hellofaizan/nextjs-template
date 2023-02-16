import React from 'react'
import { Inter } from '@next/font/google'
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

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  
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