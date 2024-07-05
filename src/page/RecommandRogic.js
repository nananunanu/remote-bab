import React, { createContext, useState } from 'react';

export const RadioContext = createContext();

export const RadioProvider = ({ children }) => {
  const [selectedOptions, setSelectedOptions] = useState({
    option1: '',
    option2: ''
  });

  const setRadioOptions = (option) => {
    setSelectedOptions(option);
  };

  return (
    <RadioContext.Provider value={{ selectedOptions, setRadioOptions }}>
      {children}
    </RadioContext.Provider>
  )
}