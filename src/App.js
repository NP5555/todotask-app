
import './App.css';
import React, {useState} from 'react';
import MainScreen from './components/MianScreen';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './components/Login';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div>
        <Toaster />
        <Routes>
          {!isAuthenticated ? (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          ) : (
            <Route path="/" element={<MainScreen />} />
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
