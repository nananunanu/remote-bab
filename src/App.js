import logo from './logo.svg';
import './App.css';
import './action.js';
import { motion } from "framer-motion";

import gif from './image/Bean Eater@4x-1.0s-200px-200px.gif';


//이것은 주석입니다.
function App() {
  return (
    <div className="App">

      <div className="screen">
        
     
        <div>
          
          <p className='lunch'>
          
            점메추<br></br>
          </p> 
          <p>
          점심 메뉴를 추천<br></br>
          해 줄래요?
          
          
        </p>
        <motion.img 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
         className='gif' src={gif}/>
        </div>
        
      </div>


    </div>
  );
}

export default App;

// $function() {
//   function
// }



// .btn:hover {
//   background-color:#002ead;
//   transition: 0.7s;
// }
