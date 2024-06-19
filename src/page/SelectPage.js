import React from "react";
import $ from "jquery";

import { motion } from "framer-motion";

import logo1 from '../image/sun-solid.svg';
import logo2 from '../image/cloud-solid.svg';
import logo3 from '../image/snowflake-regular.svg';
import logo4 from '../image/umbrella-solid.svg';

import logo5 from '../image/face-sad-tear-solid.svg';
import logo6 from '../image/face-smile-solid.svg';
import logo7 from '../image/face-angry-solid.svg';
import logo8 from '../image/face-meh-solid.svg';

import logo9 from '../image/utensils-solid.svg';

//버튼 클릭에 따른 기능 구현
// $("input[name='weather']").change(function(){
//    $(".div").css("backgroundColor","red");
// 	// var test = $("input[name='weather']:checked").val();
//   // window.alert(test);

// });
$('motion.div').click(function(){
	$(this).css({'background':'yellow','width':'100px'}) 
});




export default function SelectPage() {
    return (


      
    
    <div className="App">
      
      <div className='screen'>
        <div className='title'>
          <div className='block'>
            <p>날씨 어때요?</p>

            <form>
              <div className="select" id="high">
                <label>
                  <motion.div className="selectButton"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}>
                    
                    <input type="radio" name="weather" value="sun"></input>
                    <img className='logo' src={logo1} />
                  </motion.div>
                </label>
      
                <label>
                  <motion.div className="selectButton" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}>
                    
                    <input type="radio" name="weather" value="snowflake"></input>
                    <img className='logo' src={logo3} />
                  </motion.div>
                </label>
              </div>

              <div className="select">
                <label>
                  <motion.div className="selectButton"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}>
                    
                    <input type="radio" name="weather" value="umbrella"></input>
                    <img className='logo' src={logo4} />
                  </motion.div>
                </label>

                <label>
                  <motion.div className="selectButton"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}>
                    
                    <input type="radio" name="weather" value="cloud"></input>
                    <img className='logo' src={logo2} />
                  </motion.div>
                </label>
              </div>

            </form>
          </div>
          
          <div className='block'>
            <p>기분 어때요?</p>

            <form>
              <div className="select" id="high">
                <label>
                  <motion.div className="selectButton"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}>
                    
                    <input type="radio" name="face" value="sad"></input>
                    <img className='logo' src={logo5} />
                  </motion.div>
                </label>
      
                <label>
                  <motion.div className="selectButton" 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}>
                    
                    <input type="radio" name="face" value="smile"></input>
                    <img className='logo' src={logo6} />
                  </motion.div>
                </label>
              </div>

              <div className="select">
                <label>
                  <motion.div className="selectButton"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}>
                    
                    <input type="radio" name="face" value="angry"></input>
                    <img className='logo' src={logo7} />
                  </motion.div>
                </label>

                <label>
                  <motion.div className="selectButton"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.05 }}>
                    
                    <input type="radio" name="face" value="meh"></input>
                    <img className='logo' src={logo8} />
                  </motion.div>
                </label>
              </div>

            </form>
          </div>

          <div className="submitButton">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              id='start'><img className='utensils' src={logo9} />
            </motion.button>
          </div>
        </div>




      </div>
    </div>
    
    );
  }