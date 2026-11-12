
import './App.css'
import { Route, Routes ,Navigate} from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Home from './pages/home.jsx'
import getCurrentUser from "../src/Services/api.js"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const serverUrl = "http://localhost:8000"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser(dispatch);
  }, [dispatch]);
  const { userData } = useSelector((state) => state.user)
  console.log("userData in App.jsx:", userData); // Log the userData to check its value
  return (
    <>
      <Routes>
        <Route path="/" element={userData ? <Home /> : <Navigate to="/auth" replace />} />
        <Route path="/auth" element={userData ? <Navigate to="/" replace /> : <Auth />} />
      </Routes>


    </>
  )
}

export default App
