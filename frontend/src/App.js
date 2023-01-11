
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/SchedulePage'; 
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import PrivateRoute from './utils/PrivateRoute';
import Userform from './components/Userform';
import { AuthProvider } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';
import Calendar2 from './components/calendar';
import SchedulePage from './pages/SchedulePage';
function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Header />

        <Routes>
          {/* commented for debugging */}
          <Route element= {<PrivateRoute><HomePage/></PrivateRoute>} path="/" exact/>
          <Route element= {<Userform/>} path ='/userform' />
          {/* <Route element= {<HomePage/>} path="/" exact/> */}
          <Route element={ <LoginPage />} path="/login"/>
          <Route element={ <RegisterPage />} path="/register"/>
          <Route path="/schedule" element={<SchedulePage />} exact>
              <Route element={<PrivateRoute><Calendar2/></PrivateRoute>} index/>
              <Route element={<PrivateRoute><Userform /></PrivateRoute>} path = "preferences"/>
          </Route>

        </Routes>
</AuthProvider>
    </div>
  );
}

export default App;
