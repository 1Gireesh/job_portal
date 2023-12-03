import { useState } from 'react'
import './App.css'
import AllRoutes from './pages/AllRoutes'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
