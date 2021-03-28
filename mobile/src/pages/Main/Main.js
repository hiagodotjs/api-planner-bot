import React, {useState} from 'react';

import StartBtn from '../../components/StartBtn/StartBtn';

import {
  MainGrid,
  TextTemplate,
  ImageView,
  ImageContainer,
  CpfINput,
} from './styles';
import milesImg from '../../assets/miles.png';

const Main = () => {
  const [isVisible, setVisible] = useState(true);

  return (
    <MainGrid>
      <ImageView>
        {isVisible ? <ImageContainer source={milesImg} /> : null}
      </ImageView>
      <TextTemplate>
        Olá, meu nome é Miles, seu concierge virtual, estou aqui para planejar
        sua viagem, por favor digite seu CPF para iniciarmos
      </TextTemplate>
      <CpfINput onPressIn={() => setVisible(false)} name="documentId" />

      <StartBtn textArea="Inicar" />
    </MainGrid>
  );
};

export default Main;
