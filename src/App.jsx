import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherCard from './components/WeatherCard/WeatherCard'
import Header from './components/Header/Header'
import CardWrapper from './components/CardWrapper/CardWrapper'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Header/> */}
  {/* <CardWrapper/> */}
    <Home/>
    </>
  )
}

export default App
