import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/HomePage';
import PortfolioHome from './components/PortfolioHome';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LoginPage />} />
    //   <Route path="/home" element={<Home />} />
    // </Routes>
    // <LoginPage/>
    <PortfolioHome />
  );
}

export default App;
