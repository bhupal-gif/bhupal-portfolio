import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/HomePage';

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<LoginPage />} />
    //   <Route path="/home" element={<Home />} />
    // </Routes>
    <LoginPage/>
  );
}

export default App;
