import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {  
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://api.npoint.io/4a8d62649d30ab3f091e', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [data]);

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