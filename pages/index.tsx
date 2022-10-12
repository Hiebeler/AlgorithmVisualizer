import type { NextPage } from 'next'
import React from 'react';
import { createRef, useRef } from 'react';
import 'tailwindcss/tailwind.css'
import { Navbar } from "../components/navbar";
import Sort from "../components/sort";

const Home: NextPage = () => {

  return (
    <div className='bg-white h-screen'>
      <Navbar />
      <Sort />
    </div>
  )
}

export default Home
