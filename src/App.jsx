import { useState } from 'react'
import {Routes,Route}from 'react-router-dom'
import Home from '../pages/Home.jsx'
import OurCakes from '../pages/ourCakes.jsx'
import Layout from './Layout.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home/>}/>
      <Route path='/ourcakes' element={<OurCakes/>}/>
    </Route>
    </Routes>
  )
}

export default App
