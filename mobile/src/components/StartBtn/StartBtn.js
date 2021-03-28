import React from 'react';

import {StartButton, BtnText} from './Style';

const StartBtn = props => {
  return (
    <StartButton>
      <BtnText>{props.textArea}</BtnText>
    </StartButton>
  );
};

export default StartBtn;
