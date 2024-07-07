import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import gif from '../image/Bean Eater@4x-1.0s-200px-200px.gif';

export default function LoadingPage() {

    //3초 후에 SelectPage로 이동
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
        navigate('/SelectPage');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);
    
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
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className='gif' src={gif}
                />
            </div>
        </div>
    </div>
    );
  }
