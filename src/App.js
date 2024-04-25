import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import FooterNavbar from './Components/FooterNavbar/FooterNavbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import Listing from './Pages/Listing';
import Profile from './Pages/Profile';
import Account from './Pages/Account';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/listing' element={<Listing />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/account' element={<Account />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <FooterNavbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
