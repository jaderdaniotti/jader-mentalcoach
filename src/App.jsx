
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CoachingPage from './pages/CoachingPage'

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoachingPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  )
}

export default App
