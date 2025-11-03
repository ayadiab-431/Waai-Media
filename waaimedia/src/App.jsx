import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import OurServices from './Pages/OurServices/OurServices'
function App() {


  return (
    <Router basename='/Waai-Media'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/our-services' element={<OurServices />}/>
      </Routes>
    </Router>
  )
}

export default App
