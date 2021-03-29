import styled from 'styled-components/native';

export const MainGrid = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const TextTemplate = styled.Text`
  width: 70%;
  line-height: 25px;
  color: #ff5a00;
  font-size: 17px;
  text-align: center;
  display: flex;
`;

export const ImageView = styled.View`
  height: 50px;
  width: 50px;
  margin-right: 100px;
  margin-top: 100px;
`;

export const ImageContainer = styled.Image`
  height: 150px;
  width: 150px;
`;

export const CpfINput = styled.TextInput`
  width: 60%;
  border-bottom-color: black;
  border-bottom-width: 1px;
`;
