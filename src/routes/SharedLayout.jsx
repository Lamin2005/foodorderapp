import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import '../styles/main.css';

function SharedLayout() {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <Outlet />
      </main>
    </>
  )
}

export default SharedLayout