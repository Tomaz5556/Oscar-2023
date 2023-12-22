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
  height: 852px;
  overflow: hidden;
  padding: 15px;
`;

export const Title = styled.Text`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  top: 15px;
`;

export const Movie = styled.Text`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  padding-top: 20px;
`;

export const Description = styled.Text`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
`;

export const Director = styled.Text`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  padding-top: 20px;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  justify-content: center;
  width: 40%;
  height: 40%;
  align-self: center;
  padding: 100px;
`;