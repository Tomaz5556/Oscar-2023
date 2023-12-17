import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const StyledLinearGradient = styled(LinearGradient)`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 852px;
  overflow: hidden;
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