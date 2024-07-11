import React, { useState, useContext, useEffect } from 'react';
import { RadioContext } from './RecommandRogic';
import { useNavigate } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';

import menu1 from '../image/메뉴/계란라면(신라면).jpg';
import menu2 from '../image/메뉴/계란라면세트(신라면(계란)+공기밥).jpg';
import menu14 from '../image/메뉴/물냉면.jpg';
import menu15 from '../image/메뉴/물냉면떡갈비세트.jpg';
import menu16 from '../image/메뉴/비빔냉면.jpg';
import menu17 from '../image/메뉴/비빔냉면떡갈비세트.jpg';
import menu18 from '../image/메뉴/비빔칼국수.jpg';
import menu19 from '../image/메뉴/비빔칼국수떡갈비세트.jpg';
import menu3 from '../image/메뉴/고구마돈까스.jpg';
import menu4 from '../image/메뉴/닭강정.jpg';
import menu22 from '../image/메뉴/소떡소떡(양념).jpg';
import menu5 from '../image/메뉴/닭강정오므라이스.jpg';
import menu6 from '../image/메뉴/대왕소시지오므라이스.jpg';
import menu7 from '../image/메뉴/대왕소시지카레동.jpg';
import menu8 from '../image/메뉴/대패삼겹비빔밥.jpg';
import menu9 from '../image/메뉴/돈육순두부찌개.jpg';
import menu10 from '../image/메뉴/떡갈비오므라이스.jpg';
import menu11 from '../image/메뉴/떡갈비카레동.jpg';
import menu12 from '../image/메뉴/마그마참치마요비빔밥.jpg';
import menu13 from '../image/메뉴/마그마치킨마요비빔밥.jpg';
import menu20 from '../image/메뉴/새싹육회비빔밥.jpg';
import menu21 from '../image/메뉴/세종대왕돈까스.jpg';
import menu23 from '../image/메뉴/오므라이스.jpg';
import menu24 from '../image/메뉴/제육덮밥.jpg';
import menu25 from '../image/메뉴/찜닭덮밥.jpg';
import menu26 from '../image/메뉴/참치마요비빔밥.jpg';
import menu27 from '../image/메뉴/치킨마요비빔밥.jpg';
import menu28 from '../image/메뉴/치킨치즈오므라이스.jpg';
import menu29 from '../image/메뉴/치킨치즈카레동.jpg';
import menu30 from '../image/메뉴/치킨텐더카레동.jpg';
import menu31 from '../image/메뉴/카레덮밥.jpg';

const TypingAnimation = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex, text, speed]);

  return <p>{displayedText}</p>;
};

const RecommandPage = () => {
  const { selectedOptions } = useContext(RadioContext);
  const firstOption = selectedOptions.option1;
  const secondOption = selectedOptions.option2;

  const [foodCase, setFoodCase] = useState('');

  const [textChange, setTextChange] = useState('');
  const [textChange2, setTextChange2] = useState('');

  useEffect(() => {
    if (firstOption === 'sun' && secondOption === 'sad') {
      setFoodCase('case 1');
    } else if (firstOption === 'sun' && secondOption === 'smile') {
      setFoodCase('case 2');
    } else if (firstOption === 'sun' && secondOption === 'angry') {
      setFoodCase('case 3');
    } else if (firstOption === 'sun' && secondOption === 'meh') {
      setFoodCase('case 4');
    } else if (firstOption === 'snowflake' && secondOption === 'sad') {
      setFoodCase('case 5');
    } else if (firstOption === 'snowflake' && secondOption === 'smile') {
      setFoodCase('case 6');
    } else if (firstOption === 'snowflake' && secondOption === 'angry') {
      setFoodCase('case 7');
    } else if (firstOption === 'snowflake' && secondOption === 'meh') {
      setFoodCase('case 8');
    } else if (firstOption === 'umbrella' && secondOption === 'sad') {
      setFoodCase('case 9');
    } else if (firstOption === 'umbrella' && secondOption === 'smile') {
      setFoodCase('case 10');
    } else if (firstOption === 'umbrella' && secondOption === 'angry') {
      setFoodCase('case 11');
    } else if (firstOption === 'umbrella' && secondOption === 'meh') {
      setFoodCase('case 12');
    } else if (firstOption === 'cloud' && secondOption === 'sad') {
      setFoodCase('case 13');
    } else if (firstOption === 'cloud' && secondOption === 'smile') {
      setFoodCase('case 14');
    } else if (firstOption === 'cloud' && secondOption === 'angry') {
      setFoodCase('case 15');
    } else if (firstOption === 'cloud' && secondOption === 'meh') {
      setFoodCase('case 16');
    }

    if (firstOption === 'sun') {
      setTextChange('햇살이 따스한 날씨');
    } else if (firstOption === 'snowflake') {
      setTextChange('아름답게 눈이 오는 날씨');
    } else if (firstOption === 'umbrella') {
      setTextChange('우울하게 비가 오는 날씨');
    } else if (firstOption === 'cloud') {
      setTextChange('약간 흐린 날씨');
    }

    if (secondOption === 'sad') {
      setTextChange2('슬플');
    } else if (secondOption === 'smile') {
      setTextChange2('웃음이 절로 나올');
    } else if (secondOption === 'angry') {
      setTextChange2('화가 많이 났을');
    } else if (secondOption === 'meh') {
      setTextChange2('아무생각 없을');
    }
  }, []);

  const navigate = useNavigate();

  const backPage = () => {
    navigate('/SelectPage');
  };

  const [menuArray, setMenuArray] = useState([
    ['계란라면(신라면)', '계란라면세트(신라면(계란)+공기밥)', '물냉면', '물냉면떡갈비세트', '비빔냉면', '비빔냉면떡갈비세트', '비빔칼국수', '비빔칼국수떡갈비세트', '고구마돈까스', '닭강정', ' '],
    ['소떡소떡', '닭강정오므라이스', '대왕소시지오므라이스', '대왕소시지카레동', '대패삼겹비빔밥', '돈육순두부찌개', '떡갈비오므라이스', '떡갈비카레동', '마그마참치마요비빔밥', '마그마치킨마요비빔밥', ' '],
    ['새싹육회비빔밥', '세종대왕돈까스', '오므라이스', '제육덮밥', '찜닭덮밥', '참치마요비빔밥', '치킨마요비빔밥', '치킨치즈오므라이스', '치킨치즈카레동', '치킨텐더카레동', '카레덮밥']
  ]);

  const [temp, setTemp] = useState(Array.from({ length: menuArray.length }, () => Array(menuArray[0].length).fill(0)));
  const [menu, setMenu] = useState(' ');
  const [menuImg, setMenuImg] = useState('');

  const menuImageMap = {
    '계란라면(신라면)': menu1,
    '계란라면세트(신라면(계란)+공기밥)': menu2,
    '물냉면': menu14,
    '물냉면떡갈비세트': menu15,
    '비빔냉면': menu16,
    '비빔냉면떡갈비세트': menu17,
    '비빔칼국수': menu18,
    '비빔칼국수떡갈비세트': menu19,
    '고구마돈까스': menu3,
    '닭강정': menu4,
    '소떡소떡': menu22,
    '닭강정오므라이스': menu5,
    '대왕소시지오므라이스': menu6,
    '대왕소시지카레동': menu7,
    '대패삼겹비빔밥': menu8,
    '돈육순두부찌개': menu9,
    '떡갈비오므라이스': menu10,
    '떡갈비카레동': menu11,
    '마그마참치마요비빔밥': menu12,
    '마그마치킨마요비빔밥': menu13,
    '새싹육회비빔밥': menu20,
    '세종대왕돈까스': menu21,
    '오므라이스': menu23,
    '제육덮밥': menu24,
    '찜닭덮밥': menu25,
    '참치마요비빔밥': menu26,
    '치킨마요비빔밥': menu27,
    '치킨치즈오므라이스': menu28,
    '치킨치즈카레동': menu29,
    '치킨텐더카레동': menu30,
    '카레덮밥': menu31
  };

  const isAllSelected = (tempArray) => {
    for (let row of tempArray) {
      if (row.includes(0)) {
        return false;
      }
    }
    return true;
  };

  const menuSelect = () => {
    let attempts = 0; // 시도 횟수를 세기 위한 변수
    const maxAttempts = menuArray.length * menuArray[0].length * 10; // 최대 시도 횟수

    while (attempts < maxAttempts) {
      let randomIndex1 = Math.floor(Math.random() * menuArray.length);
      let randomIndex2 = Math.floor(Math.random() * menuArray[0].length);

      if (isAllSelected(temp)) {
        alert("모든 메뉴를 추천받았습니다!");
        return;
      }

      const newTemp = temp.map(row => [...row]);

      if (temp[randomIndex1][randomIndex2] === 0 && menuArray[randomIndex1][randomIndex2] !== ' ') {
        newTemp[randomIndex1][randomIndex2] = 1;
        setTemp(newTemp);

        const selectedMenu = menuArray[randomIndex1][randomIndex2];
        setMenu(selectedMenu);
        setMenuImg(menuImageMap[selectedMenu]);
        return; // 메뉴를 추천했으므로 함수 종료
      } else if (menuArray[randomIndex1][randomIndex2] === ' ') {
        newTemp[randomIndex1][randomIndex2] = 1;
        setTemp(newTemp);
      }

      attempts++;
    }

    alert("모든 메뉴를 추천받았습니다!");
  };

  useEffect(() => {
    menuSelect();
  }, []);

  const sentence = `오늘 같이 맑은 하늘을 보면 마음속 있던 아픈 마음이 사라지는 기분이에요. 그런 의미에서 "${menu}"을 먹어보는건 어떨까요?`;
  return (
    <div className='recommandBack'>
      <br/><br/><br/><br/><br/>
      <div className='highImgBox'>
        <div className='imgBox'>
          <img src={menuImg} alt="menu"/>
        </div>
        <div className='textBox'>{textChange}에 {textChange2}때에는 이런 음식을 추천해요!</div>
      </div>
      <div className='highImgBox'>
        <p>"{menu}"</p>
        <p></p>
      </div>

      <div className='emotionalWriting'>
        <TypingAnimation text={sentence} speed={100} />
      </div>
      
      <div className='backFlex'>
        <div className='backPageButton'>
          <button onClick={backPage}>돌아가기</button>
        </div>
        <div className='backPageButton'>
          <button onClick={menuSelect}>메뉴 재추천 받기<p>같은 날씨/기분 선택상태로</p></button>
        </div>
      </div>
    </div>
  );
};

export default RecommandPage;
