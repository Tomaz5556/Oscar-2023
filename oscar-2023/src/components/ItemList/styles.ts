import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  background-color: white;
  border: 1px solid black;
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 15px;
  padding: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;