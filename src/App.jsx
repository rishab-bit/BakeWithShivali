import { useState } from 'react'
import {Routes,Route}from 'react-router-dom'
import Home from '../components/Home.jsx'
import OurCakes from '../components/ourCakes.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/ourcakes' element={<OurCakes/>}/>
    </Routes>
  )
}

export default App
