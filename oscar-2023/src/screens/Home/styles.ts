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
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  top: 15px;
  padding: 20px;
`;

export const Ellipse2 = styled.Image.attrs({
  resizeMode: 'contain',
})`
  position: absolute;
  top: 200px;
  justify-content: center;
  width: 32%;
  height: 32%;
  align-self: center;
`;