import { motion } from "framer-motion";

import SelectPage from "./page/SelectPage";
import LoadingPage from './page/LoadingPage';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          처음화면
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/SelectPage'>
          / 셀렉트
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<LoadingPage />} />
        <Route path='/SelectPage' element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
