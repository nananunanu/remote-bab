import React, { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { RadioContext } from "./RecommandRogic";
import useSound from 'use-sound';
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

  const buttonVariants = {
    pressed: {
      scale: 0.9,
      transition: { duration: 0.05 },
    },
  }

  //날씨 버튼 
  const [activeStates, setActiveStates] = useState([false, false, false, false]); //<배열> 모든 배열칸에 false값을 줌
  
  const toggleActive = (index, option) => {
    const newActiveStates = [...activeStates]; // 기존 상태 배열 복사

    for (let i = 0; i < 4; i++) {  //for문으로 모든 배열의 값을 false로 바꿈 초록색 -> 흰색
      if (newActiveStates[index] == true) continue; // (true인 배열만 제외)모두 false
      newActiveStates[i] = false;
    }

    newActiveStates[index] = !newActiveStates[index]; // 클릭된 버튼의 값을 true로 변경
    setActiveStates(newActiveStates); // 상태 업데이트

    if (selectedOption1 == option) {
      setSelectedOption1('');
    } else {
      setSelectedOption1(option);
    }

    navigator.vibrate(200);
  };
  
  //기분 버튼
  const [activeStates2, setActiveStates2] = useState([false, false, false, false]); //<배열> 모든 배열칸에 false값을 줌
  
  const toggleActive2 = (index, option) => {
    const newActiveStates2 = [...activeStates2]; // 기존 상태 배열 복사

    for (let i = 0; i < 4; i++) {  //for문으로 모든 배열의 값을 false로 바꿈 초록색 -> 흰색
      if (newActiveStates2[index] == true) continue; // (true인 배열만 제외)모두 false
      newActiveStates2[i] = false;
    }

    newActiveStates2[index] = !newActiveStates2[index]; // 클릭된 버튼의 값을 true로 변경
    setActiveStates2(newActiveStates2); // 상태 업데이트

    if (selectedOption2 == option) {
      setSelectedOption2('');
    } else {
      setSelectedOption2(option);
    }

    navigator.vibrate(200);
  };

  const { setRadioOptions } = useContext(RadioContext);

  const [selectedOption1, setSelectedOption1] = useState('');//변수의 값이 바뀌면 브라우저가 재 렌더링 됨
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  //로딩화면true/false변경 및 선택한 날씨/기분 값을 RecommandRogic으로 넘겨주고 2초뒤에 결과 페이지로 넘겨주는 로직
  const [isLoading, setIsLoading] = useState(false);  //로딩중인지 아닌지를 판단하는 변수

  const navigate = useNavigate(); //다음페이지로 넘겨주는 리액트 훅(기능)

  const handleSubmit = (event) => { 
    event.preventDefault();
    
    setRadioOptions({ option1: selectedOption1, option2: selectedOption2 });
    
    if(!selectedOption1 && selectedOption2) { //알림창 띄우기
      alert('날씨를 선택해야 합니다!');

    } else if(selectedOption1 && !selectedOption2) {
      alert('기분을 선택해야 합니다!');

    } else if(!selectedOption1 && !selectedOption2) {
      alert('항목을 선택해야 합니다.');
    }
    else {
      setIsLoading(true); //로딩페이지를 열어줌

      setTimeout(() => { //타이머
        navigate('/RecommandPage'); //결과페이지로 넘겨줌
        setIsLoading(false); //로딩페이지를 닫아줌
      }, 2000);
    }
  };

  //결과화면으로 넘어가기 전 로딩화면
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => { //그냥 250밀리세컨드마다 배열돌면서 글자 바꿔주는거
    const texts = ['로딩중', '로딩중.', '로딩중..', '로딩중...'];
    let index = 0;

    const intervalId = setInterval(() => {
      index = (index + 1) % texts.length; //0 1 2 3 반복됨

      setLoadingText(texts[index]);
    }, 250);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  const [ backgroundImage, setBackgroundImage ] = useState('screen');

  useEffect(() => {
    if (selectedOption1 == 'sun') {
      setBackgroundImage('sunBackground');
    } else if (selectedOption1 == 'snowflake') {
      setBackgroundImage('snowflakeBackground');
    } else if (selectedOption1 == 'umbrella') {
      setBackgroundImage('umbrellaBackground');    
    } else if (selectedOption1 == 'cloud') {
      setBackgroundImage('cloudBackground');  
    } else {
      setBackgroundImage('normalBackground');  
    }
  }, [selectedOption1])

  return (

    <div className="App">

      <div className={backgroundImage}>
        {isLoading && //isLoading이 true면 해당 컴포넌트가 렌더링됨
          <div className="isLoading">
            <div>선택된 밥을 먹을지어다</div>
            <p>{loadingText}</p>
          </div> 
        }
        
        {!isLoading && ( //isLoading이 false면 해당 컴포넌트가 렌더링됨
          <form onSubmit={handleSubmit} className="form">
            <div className='block'>
              <p>날씨 어때요?</p>
              <div className="select" id="high">
                <label>
                  <motion.div
                    className={"selectButton" + (activeStates[0] ? " active" : "")}
                    variants={buttonVariants}
                    whileTap="pressed"
                  >

                    <input type="radio" name="weather" value="sun" checked={selectedOption1 === 'sun'} onChange={handleChange1} onClick={() => toggleActive(0, 'sun')}></input>
                    <img className='logo' src={logo1} />
                  </motion.div>
                </label> 
      
                <label>
                  <motion.div 
                    className={"selectButton" + (activeStates[1] ? " active" : "")}
                    variants={buttonVariants}
                    whileTap="pressed"
                  >
                    
                    <input type="radio" name="weather" value="snowflake" checked={selectedOption1 === 'snowflake'} onChange={handleChange1} onClick={() => toggleActive(1, 'snowflake')}></input>
                    <img className='logo' src={logo3} />
                  </motion.div>
                </label>
              </div>

              <div className="select">
                <label>
                  <motion.div
                    className={"selectButton" + (activeStates[2] ? " active" : "")}
                    variants={buttonVariants}
                    whileTap="pressed"
                  >
                    
                    <input type="radio" name="weather" value="umbrella" checked={selectedOption1 === 'umbrella'} onChange={handleChange1} onClick={() => toggleActive(2, 'umbrella')}></input>
                    <img className='logo' src={logo4} />
                  </motion.div>
                </label>
                <label>
                  <motion.div
                    className={"selectButton" + (activeStates[3] ? " active" : "")}
                    variants={buttonVariants}
                    whileTap="pressed"
                  >
                    
                    <input type="radio" name="weather" value="cloud" checked={selectedOption1 === 'cloud'} onChange={handleChange1} onClick={() => toggleActive(3, 'cloud')}></input>
                    <img className='logo' src={logo2} />
                  </motion.div>
                </label>
              </div>
            </div>

            <div className='block'>
              <p id="mood">기분 어때요?</p>
              <div className="select" id="high">
                <label>
                  <motion.div
                    className={"selectButton" + (activeStates2[0] ? " active" : "")}
                    variants={buttonVariants}
                    whileTap="pressed"
                  >
                    
                    <input type="radio" name="face" value="sad" checked={selectedOption2 === 'sad'} onChange={handleChange2} onClick={() => toggleActive2(0, 'sad')}></input>
                    <img className='logo' src={logo5} />
                  </motion.div>
                </label>
      
                <label>
                  <motion.div
                    className={"selectButton" + (activeStates2[1] ? " active" : "")}
                    variants={buttonVariants}
                    whileTap="pressed"
                  >
                    
                    <input type="radio" name="face" value="smile" checked={selectedOption2 === 'smile'} onChange={handleChange2} onClick={() => toggleActive2(1, 'smile')}></input>
                    <img className='logo' src={logo6} />
                  </motion.div>
                </label>
              </div>
              <div className="select">
                <label>
                  <motion.div
                    className={"selectButton" + (activeStates2[2] ? " active" : "")}
                    variants={buttonVariants}
                    whileTap="pressed"
                  >
                    
                    <input type="radio" name="face" value="angry" checked={selectedOption2 === 'angry'} onChange={handleChange2} onClick={() => toggleActive2(2, 'angry')}></input>
                    <img className='logo' src={logo7} />
                  </motion.div>
                </label>
                <label>
                  <motion.div
                    className={"selectButton" + (activeStates2[3] ? " active" : "")}
                    variants={buttonVariants}
                    whileTap="pressed"
                  >
                    
                    <input type="radio" name="face" value="meh" checked={selectedOption2 === 'meh'} onChange={handleChange2} onClick={() => toggleActive2(3, 'meh')}></input>
                    <img className='logo' src={logo8} />
                  </motion.div>
                </label>
              </div>
            </div>

            <div className="submitButton">
              <motion.button 
                  variants={buttonVariants}
                  whileTap="pressed"

                id='start' type="submit" ><img className='utensils' src={logo9} />
              </motion.button>
            </div>
          </form>
        )}
      </div>
      
    </div>

  );
}