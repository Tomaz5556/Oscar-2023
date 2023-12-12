import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: white;
  align-items: center;
  margin: 18px;
`;

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 15px;
  padding: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;