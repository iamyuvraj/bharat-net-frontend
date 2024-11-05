import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import NewConnection from './pages/NewConnection';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router basename="/bharat-net-frontend">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apply" element={<NewConnection />} />
      </Routes>
    </Router>
  );
}

export default App;