import React, { useState } from "react";
// import $ from "jquery";

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



export default function SelectPage() {

  //날씨 버튼 
  const [activeStates, setActiveStates] = useState([false, false, false, false]); //<배열> 모든 배열칸에 false값을 줌
  
  const toggleActive = (index) => {
    const newActiveStates = [...activeStates]; // 기존 상태 배열 복사

    for (let i = 0; i < 4; i++) {  //for문으로 모든 배열의 값을 false로 바꿈 초록색 -> 흰색
      if (newActiveStates[index] == true) continue; // (true인 배열만 제외)모두 false
      newActiveStates[i] = false;
    }

    newActiveStates[index] = !newActiveStates[index]; // 클릭된 버튼의 값을 true로 변경
    setActiveStates(newActiveStates); // 상태 업데이트
  };
  
  //기분 버튼
  const [activeStates2, setActiveStates2] = useState([false, false, false, false]); //<배열> 모든 배열칸에 false값을 줌
  
  const toggleActive2 = (index) => {
    const newActiveStates2 = [...activeStates2]; // 기존 상태 배열 복사

    for (let i = 0; i < 4; i++) {  //for문으로 모든 배열의 값을 false로 바꿈 초록색 -> 흰색
      if (newActiveStates2[index] == true) continue; // (true인 배열만 제외)모두 false
      newActiveStates2[i] = false;
    }

    newActiveStates2[index] = !newActiveStates2[index]; // 클릭된 버튼의 값을 true로 변경
    setActiveStates2(newActiveStates2); // 상태 업데이트
  };

  return (

    <div className="App">

      <div className='screen'>
        <div className='title'>
        
          <form action="RecommandRogic">
            <div className='block'>
              <p>날씨 어때요?</p>

              <form>
                <div className="select" id="high">
                  <label>
                    <motion.div
                      className={"selectButton" + (activeStates[0] ? " active" : "")}
                      whileTap={{ scale: 1.15 }}>

                      <input type="radio" name="weather" value="sun" onClick={() => toggleActive(0)}></input>
                      <img className='logo' src={logo1} />
                    </motion.div>
                  </label>

                  <label>
                    <motion.div
                      className={"selectButton" + (activeStates[1] ? " active" : "")}
                      whileTap={{ scale: 1.15 }}>

                      <input type="radio" name="weather" value="snowflake" onClick={() => toggleActive(1)}></input>
                      <img className='logo' src={logo3} />
                    </motion.div>
                  </label>
                </div>

                <div className="select">
                  <label>
                    <motion.div
                      className={"selectButton" + (activeStates[2] ? " active" : "")}
                      whileTap={{ scale: 1.15 }}>

                      <input type="radio" name="weather" value="umbrella" onClick={() => toggleActive(2)}></input>
                      <img className='logo' src={logo4} />
                    </motion.div>
                  </label>

                  <label>
                    <motion.div
                      className={"selectButton" + (activeStates[3] ? " active" : "")}
                      whileTap={{ scale: 1.15 }}>

                      <input type="radio" name="weather" value="cloud" onClick={() => toggleActive(3)}></input>
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
                    <motion.div
                      className={"selectButton" + (activeStates2[0] ? " active" : "")}
                      whileTap={{ scale: 1.15 }}>

                      <input type="radio" name="face" value="sad" onClick={() => toggleActive2(0)}></input>
                      <img className='logo' src={logo5} />
                    </motion.div>
                  </label>

                  <label>
                    <motion.div
                      className={"selectButton" + (activeStates2[1] ? " active" : "")}
                      whileTap={{ scale: 1.15 }}>

                      <input type="radio" name="face" value="smile" onClick={() => toggleActive2(1)}></input>
                      <img className='logo' src={logo6} />
                    </motion.div>
                  </label>
                </div>

                <div className="select">
                  <label>
                    <motion.div
                      className={"selectButton" + (activeStates2[2] ? " active" : "")}
                      whileTap={{ scale: 1.15 }}>

                      <input type="radio" name="face" value="angry" onClick={() => toggleActive2(2)}></input>
                      <img className='logo' src={logo7} />
                    </motion.div>
                  </label>

                  <label>
                    <motion.div
                      className={"selectButton" + (activeStates2[3] ? " active" : "")}
                      whileTap={{ scale: 1.15 }}>

                      <input type="radio" name="face" value="meh" onClick={() => toggleActive2(3)}></input>
                      <img className='logo' src={logo8} />
                    </motion.div>
                  </label>
                </div>

              </form>
            </div>

            <button type="submit">
            <div className="submitButton">
              <motion.button
                whileTap={{ scale: 1.15 }}
                id='start'><img className='utensils' src={logo9} />
              </motion.button>
            </div>
            </button>

          </form>
        
        </div>



      </div>
    </div>

  );
}