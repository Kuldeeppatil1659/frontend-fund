import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/landing/landing'
import BrowseFundraisers from './components/landing/BrowseFundraisers'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CampaignDetails from './components/landing/CampaignDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/browse" element={<BrowseFundraisers />} />
        <Route path="/campaign" element={<CampaignDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
