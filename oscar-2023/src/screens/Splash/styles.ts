import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const StyledLinearGradient = styled(LinearGradient)`
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Title = styled.Text`
  margin: 0;
  top: 400px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 48px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
`;

export const SplashImg = styled.Image.attrs({
  resizeMode: 'contain',
})`
  position: absolute;
  bottom: 50px;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-self: center;
`;