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
  margin-bottom: 40px;
`;

export const StyledTextInput = styled.TextInput.attrs(props => ({
  selectionColor: props.theme.colors.dark
}))`
  background-color: ${({ theme }) => theme.colors.light};
  border: 3px solid ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 24px;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  align-items: center;
  margin: 10px;
  text-align: center;
  border-radius: 15px;
`;