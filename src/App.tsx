import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import NotFound from './pages/NotFound'
import { Publish } from './pages/Publish'
import AdminControlPanel from './pages/AdminControlPanel'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Navbar />

      <Routes >
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Calendar' element={<Calendar />} />
        <Route path='/Publish' element={<Publish />} />
        <Route path='/AdminControlPanel' element={<AdminControlPanel />} />
        <Route path='/AdminControlPanel/:companyId' element={<AdminControlPanel />} />
        <Route path='/Login' element={<Login />} />

      </Routes>



    </>
  )
}

export default App
