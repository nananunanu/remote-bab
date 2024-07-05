import React, { useContext } from 'react';
import { RadioContext } from './RecommandRogic';

const RecommandPage = () => {
  const { selectedOptions } = useContext(RadioContext);
  const firstOption = selectedOptions.option1;
  const secondOption = selectedOptions.option2;

  let result = '';
  if(firstOption == 'sun' && secondOption == 'sad') {
    result = 'case 1'
  }
  else if(firstOption == 'sun' && secondOption == 'smile') {
    result = 'case 2'
  }
  else if(firstOption == 'sun' && secondOption == 'angry') {
    result = 'case 3'
  }
  else if(firstOption == 'sun' && secondOption == 'meh') {
    result = 'case 4'
  }
  else if(firstOption == 'snowflake' && secondOption == 'sad') {
    result = 'case 5'
  }
  else if(firstOption == 'snowflake' && secondOption == 'smile') {
    result = 'case 6'
  }
  else if(firstOption == 'snowflake' && secondOption == 'angry') {
    result = 'case 7'
  }
  else if(firstOption == 'snowflake' && secondOption == 'meh') {
    result = 'case 8'
  }
  else if(firstOption == 'umbrella' && secondOption == 'sad') {
    result = 'case 9'
  }
  else if(firstOption == 'umbrella' && secondOption == 'smile') {
    result = 'case 10'
  }
  else if(firstOption == 'umbrella' && secondOption == 'angry') {
    result = 'case 11'
  }
  else if(firstOption == 'umbrella' && secondOption == 'meh') {
    result = 'case 12'
  }
  else if(firstOption == 'cloud' && secondOption == 'sad') {
    result = 'case 13'
  }
  else if(firstOption == 'cloud' && secondOption == 'smile') {
    result = 'case 14'
  }
  else if(firstOption == 'cloud' && secondOption == 'angry') {
    result = 'case 15'
  }
  else if(firstOption == 'cloud' && secondOption == 'meh') {
    result = 'case 16'
  }


  return (
    <div>
      <h1>머 선택했는지 알려줌</h1>
      <h2>첫번째거 : {firstOption}</h2>
      <h2>두번째거 : {secondOption}</h2>
      <br/>
      <h2>두번째거 : {result}</h2>

    </div>
  );
};

export default RecommandPage;