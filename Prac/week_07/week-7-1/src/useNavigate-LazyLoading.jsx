
import { Suspense, lazy } from 'react'
const Landing = lazy(()=> import( './components/Landing.jsx'))
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
const Dashboard = lazy(()=> import('./components/Dashboard.jsx'))



export default function App() {
  

  return (
    <div>
      


      <BrowserRouter>
      <Appbar />
        <Routes>
          <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Landing /></Suspense >} />
          <Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense >} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

function Appbar() {
  const navigate = useNavigate();

  return(
    <div>
      <div>
        <button onClick={() => {
          navigate('/dashboard')}}>Dashboard</button>
        <button onClick={() => {
          navigate('/')}}>Landing</button>
      </div>
    </div>
  )
}

