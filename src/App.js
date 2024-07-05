import { motion } from "framer-motion";

import SelectPage from "./page/SelectPage";
import LoadingPage from './page/LoadingPage';
import RecommandPage from './page/RecommandPage';

import { RadioProvider } from './page/RecommandRogic';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
      <RadioProvider>
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoadingPage />} />
        <Route path='/SelectPage' element={<SelectPage />} />
        <Route path='/RecommandPage' element={<RecommandPage />} />

        {/* 추가적인 라우트가 필요하다면 여기에 추가 */}
        {/* 404 페이지 설정 예시 */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      </BrowserRouter>
      </RadioProvider>
    </div>
  );
}

export default App;
