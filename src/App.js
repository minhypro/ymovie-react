import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Routes from './config/routes'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  )
}

export default App  
