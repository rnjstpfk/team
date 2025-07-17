import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Homemain from './components/Homemain';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Singup';
import Museums from './pages/Museums';

// 필요한 페이지들 import
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/museums" element={<Museums />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;
