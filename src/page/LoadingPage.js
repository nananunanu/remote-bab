import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import gif from '../image/Bean Eater@4x-1.0s-200px-200px.gif';

export default function LoadingPage() {

    //3초 후에 SelectPage로 이동
    const navigate = useNavigate();
    
    const [tapState, setTapState] = useState(0);

    useEffect(() => {
        if(tapState != 4){
        const timer = setTimeout(() => {
        
        navigate('/SelectPage');
        }, 2000);
       

         return () => clearTimeout(timer);
        }
    }, []);

    

    const TapTapTap = () => {
        setTapState(tapState + 1);
        if(tapState == 4) {
            navigate('/SecretContributePage');
            setTapState(0);
        }
      };
    
    //LoadingPage
    return (
    <div className="App2">
        <div className="screen2">
            <div>
                <p className='lunch'>
                점메추<br />
                </p> 
                <p>
                    점심 메뉴를 추천<br />
                    해 줄래요?
                </p>
                <motion.img 
                    // whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className='gif' src={gif} onClick={TapTapTap}
                />
            </div>
        </div>
    </div>
    );
  }
