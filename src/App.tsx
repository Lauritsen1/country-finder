import React from 'react'

import Home from './pages/Home'
import SearchIndex from './pages/SearchIndex'
import Country from './pages/Country'

import Layout from './components/Layout'

import { Routes, Route } from 'react-router-dom'

export const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchindex' element={<SearchIndex />} />
        <Route path='/country/:id' element={<Country />} />
      </Routes>
    </Layout>
  )
}