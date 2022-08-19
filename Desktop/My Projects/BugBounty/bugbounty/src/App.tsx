import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LogIn from './pages/LogIn';
import Logout from './pages/Logout';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import OpenBounties from './pages/OpenBounties';
import ClosedBounties from './pages/ClosedBounties';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
      <Router>
        <Header/>
          <div className='z-100 flex-grow bg-[#5b5858]'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/bounties' element={<OpenBounties />} />
              <Route path='/closedbounties' element={<ClosedBounties />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
