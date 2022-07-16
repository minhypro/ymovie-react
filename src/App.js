import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalouge from './pages/Catalouge'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Catalouge />} />
        <Route path="/tv" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App  
