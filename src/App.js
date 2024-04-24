import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import FooterNavbar from './Components/FooterNavbar/FooterNavbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />}/>
      </Routes>
      <FooterNavbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
