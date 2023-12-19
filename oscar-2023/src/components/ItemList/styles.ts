import styled from 'styled-components/native';

export const StyledTouchableOpacity = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: ${({ selected, theme }) => selected ? theme.colors.secondary : theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  align-items: center;
`;

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 15px;
  padding: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;