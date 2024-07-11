import React, { useState, useEffect } from "react";
import Xmark from '../image/xmark-solid.svg';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function SecretContributePage() {

    const navigate = useNavigate();
    
    const goBack = () => {
      navigate('/');
    };
  
    

    
    
    //SecretContributePage
    return (
      <div className="secretBackground">
      <div className="secretScreen">
          <div>
             <img className="goBack" src={Xmark} onClick={goBack}/>
          </div>
          <div>
              <div className="slideUp">
              <p className="title">개발자</p>
              <p>김건우 @geonwo__o 손건 @cho_ng_5</p> <br/>

              <p className="subTitle">피드백</p>
              <p>
              정바다 @baqkek516 김소은 @s.oonx
              <br/>
              임수인 @lim_fifty 백지혜 @jhey129
              <br/>
              도지훈 @ji.__.po 심태양 @simtaeyang 
              </p>
              < br/><br/>

              <p className="subTitle">음식 선호도 조사</p>
              <p>
              정바다 @baqkek516 김소은 @s.oonx
              <br/>
              도지훈 @ji.__.po 이하준 @plum_0ha
              <br/>
              강병현 @hyeon.728 
              </p>
              <br/><br/>

              <p className="subTitle">그 외</p>
              <p>
              서주희 @jwxyse_ 임수현 @s.hyeon17
              <br/>
              엄도영 @do0___eee 김태빈 @ttbb9170
              <br/>
              김희원 @xeewonn 김민서 @min_seo544
              <br/>
              최정연 @pon_nd_0106 박주혁 @juhyeok8
              <br/>
              김지성 @zisingyee 김민서 @min_seo544
              <br/>
              김민재 @m.jjaaeee 류성욱 @senxwox
              <br/>
              고동완 @dur.1ng 김아진 @aazjinn
              </p>
              </div>
          </div>
      </div>
  </div>
    );
  }
