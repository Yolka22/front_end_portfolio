import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navigation from './UI/Navigation/Navigation';
import HomePage from './UI/Pages/HomePage/HomePage';
import ContactPage from './UI/Pages/ContactPage/ContactPage';
import SkilsPage from './UI/Pages/SkilsPage/SkilsPage';
function App() {
  return (
    <div className="App">
    <Navigation>
    </Navigation>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/Contact' element={<ContactPage/>}></Route>
      <Route path='/Skils' element={<SkilsPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
