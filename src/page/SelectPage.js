import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { RadioContext } from "./RecommandRogic";
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

  const { setRadioOptions } = useContext(RadioContext);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const navigate = useNavigate();

  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);

  };

  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const [isLoading, setIsLoading] = useState(false); 
  const [notSelct, setNotSelect] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(selectedOption1 == false) {
      setNotSelect('날씨를 선택하지 않았습니다.');
      
    } else if(selectedOption1 && selectedOption2) {
      setNotSelect('');
    }
    else {
      setNotSelect('기분을 선택하지 않았습니다.');
    }
    setIsLoading(true);

    setRadioOptions({ option1: selectedOption1, option2: selectedOption2 });

    setTimeout(() => {
      if (selectedOption1 && selectedOption2) {
        navigate('/RecommandPage');
      }
      setIsLoading(false);
    }, 2000);
    
  };

  return (

    <div className="App">

      <div className='screen'>
        <div className='title'>
            
            {isLoading && (
              <div>
                <p>로딩중입니다.</p>
                <p>{notSelct}</p>
              </div>
            )}
            
            {!isLoading && (
            <form onSubmit={handleSubmit}>
              <div className='block'>
                <p>날씨 어때요?</p>


                  <div className="select" id="high">
                    <label>
                      <motion.div
                        className={"selectButton" + (activeStates[0] ? " active" : "")}
                        whileTap={{ scale: 1.15 }}>
                          
                        <input type="radio" name="weather" value="sun" checked={selectedOption1 === 'sun'} onChange={handleChange1} onClick={() => toggleActive(0)}></input>
                        <img className='logo' src={logo1} />
                      </motion.div>
                    </label>
          
                    <label>
                      <motion.div 
                        className={"selectButton" + (activeStates[1] ? " active" : "")}
                        whileTap={{ scale: 1.15 }}>
                        
                        <input type="radio" name="weather" value="snowflake" checked={selectedOption1 === 'snowflake'} onChange={handleChange1} onClick={() => toggleActive(1)}></input>
                        <img className='logo' src={logo3} />
                      </motion.div>
                    </label>
                  </div>

                  <div className="select">
                    <label>
                      <motion.div
                        className={"selectButton" + (activeStates[2] ? " active" : "")}
                        whileTap={{ scale: 1.15 }}>
                        
                        <input type="radio" name="weather" value="umbrella" checked={selectedOption1 === 'umbrella'} onChange={handleChange1} onClick={() => toggleActive(2)}></input>
                        <img className='logo' src={logo4} />
                      </motion.div>
                    </label>

                    <label>
                      <motion.div
                        className={"selectButton" + (activeStates[3] ? " active" : "")}
                        whileTap={{ scale: 1.15 }}>
                        
                        <input type="radio" name="weather" value="cloud" checked={selectedOption1 === 'cloud'} onChange={handleChange1} onClick={() => toggleActive(3)}></input>
                        <img className='logo' src={logo2} />
                      </motion.div>
                    </label>
                  </div>


              </div>
              
              <div className='block'>
                <p>기분 어때요?</p>


                  <div className="select" id="high">
                    <label>
                      <motion.div
                        className={"selectButton" + (activeStates2[0] ? " active" : "")}
                        whileTap={{ scale: 1.15 }}>
                        
                        <input type="radio" name="face" value="sad" checked={selectedOption2 === 'sad'} onChange={handleChange2} onClick={() => toggleActive2(0)}></input>
                        <img className='logo' src={logo5} />
                      </motion.div>
                    </label>
          
                    <label>
                      <motion.div
                        className={"selectButton" + (activeStates2[1] ? " active" : "")}
                        whileTap={{ scale: 1.15 }}>
                        
                        <input type="radio" name="face" value="smile" checked={selectedOption2 === 'smile'} onChange={handleChange2} onClick={() => toggleActive2(1)}></input>
                        <img className='logo' src={logo6} />
                      </motion.div>
                    </label>
                  </div>

                  <div className="select">
                    <label>
                      <motion.div
                        className={"selectButton" + (activeStates2[2] ? " active" : "")}
                        whileTap={{ scale: 1.15 }}>
                        
                        <input type="radio" name="face" value="angry" checked={selectedOption2 === 'angry'} onChange={handleChange2} onClick={() => toggleActive2(2)}></input>
                        <img className='logo' src={logo7} />
                      </motion.div>
                    </label>

                    <label>
                      <motion.div
                        className={"selectButton" + (activeStates2[3] ? " active" : "")}
                        whileTap={{ scale: 1.15 }}>
                        
                        <input type="radio" name="face" value="meh" checked={selectedOption2 === 'meh'} onChange={handleChange2} onClick={() => toggleActive2(3)}></input>
                        <img className='logo' src={logo8} />
                      </motion.div>
                    </label>
                  </div>


              </div>

              <div className="submitButton">
                <motion.button 
                  whileTap={{ scale: 1.15 }}
                  id='start' type="submit" ><img className='utensils' src={logo9} />
                </motion.button>
              </div>
            </form>
            )}
          
            


          </div>
      </div>
    </div>

  );
}