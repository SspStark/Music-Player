import {Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'

const App = () => (
  <Routes>
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/" element={<LoginPage />} />
    <Route exact path="/sign-up" element={<SignUpPage />} />
  </Routes>
)

export default App
