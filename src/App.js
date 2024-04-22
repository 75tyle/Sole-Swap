import './App.css';
import Navbar, { Navbarjs } from './Components/Navbar/Navbar';
import Searchbar from './Components/Searchbar/Searchbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Searchbar />
    </div>
  );
}

export default App;
