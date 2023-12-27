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
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  top: 15px;
`;

export const Movie = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 36px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  padding-top: 20px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
`;

export const Director = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  padding-top: 20px;
`;

export const Image = styled.Image`
  object-fit: fill;
  width: 70%;
  height: 40%;
  border-radius: 20px;
  margin: 10px;
`;