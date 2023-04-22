import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <main className='mainGuard'>
        <Header/>
        <Outlet/>
    </main>
  )
}
