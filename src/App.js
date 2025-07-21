import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Homemain from './components/Homemain';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Singup';
import Museums from './pages/Museums';
import Louvre from './pages/museums/Louvre';
import BritishMuseum from './pages/museums/BritishMuseum';
import Ermitage from './pages/museums/Ermitage';
import Metropolitan from './pages/museums/Metropolitan';
import Vatican from './pages/museums/Vatican';

import ArtworkDetail from './pages/ArtworkDetail';

// 필요한 페이지들 import
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homemain />} />
          <Route path="/main" element={<Main />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/museums" element={<Museums />} />
          <Route path="/museums/louvre" element={<Louvre />} />
          <Route path="/museums/british-museum" element={<BritishMuseum />} />
          <Route path="/museums/ermitage" element={<Ermitage />} />
          <Route path="/museums/metropolitan" element={<Metropolitan />} />
          <Route path="/museums/vatican" element={<Vatican />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;
