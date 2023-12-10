import styled from 'styled-components/native';

export const Container = styled.View`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 852px;
  position: relative;
  overflow: hidden;
  background: #fff;
`;

export const Title = styled.Text`
  margin: 0;
  top: 450px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 48px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
`;

export const Ellipse1 = styled.Image`
  position: absolute;
  top: 170px;
  justify-content: center;
`;

export const OscarImg = styled.ImageBackground`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  object-fit: cover;
`;