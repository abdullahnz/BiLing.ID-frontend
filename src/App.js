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

import Dashboard from './views/pages/dashboard';
import DashboardProfile from './views/pages/dashboard/pages/profile';
import DashboardPsikotes from './views/pages/dashboard/pages/psikotes';
import DashboardJadwal from './views/pages/dashboard/pages/jadwal';
import DashboardRiwayat from './views/pages/dashboard/pages/riwayat';
import DashboardPengaturan from './views/pages/dashboard/pages/setting';
import Logout from './views/pages/dashboard/pages/logout';

const App = () => {
   
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="psikotes">
            <Route index element={<Psikotes shadow={false} />} />
            <Route path="attempts" element={<PsikotesAttempts shadow={false} />} />
            <Route path="payment" element={<PsikotesPayment shadow={false} />} />
          </Route>
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="dashboard">
            <Route index element={<Dashboard page={DashboardProfile} shadow={false} />} />
            <Route path="profile" element={<Dashboard page={DashboardProfile} />} />
            <Route path="psikotes" element={<Dashboard page={DashboardPsikotes} />} />
            <Route path="jadwal" element={<Dashboard page={DashboardJadwal} />} />
            <Route path="riwayat" element={<Dashboard page={DashboardRiwayat} />} />
            <Route path="setting" element={<Dashboard page={DashboardPengaturan} />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
