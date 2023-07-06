// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/pages/home'
import Login from './views/pages/login';
import Register from './views/pages/register';
import Psikotes from './views/pages/psikotes';
import PsikotesAttempts from './views/pages/psikotes/attempts';
import PsikotesPayment from './views/pages/psikotes/payment';
import ForgotPassword from './views/pages/login/forgot-password';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/psikotes" exact element={<Psikotes shadow={false} />} />
        <Route path="/psikotes/attempts" exact element={<PsikotesAttempts shadow={false} />} />
        <Route path="/psikotes/payment" exact element={<PsikotesPayment shadow={false} />} />
        <Route path="/forgot-password" exact element={<ForgotPassword />} />
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
