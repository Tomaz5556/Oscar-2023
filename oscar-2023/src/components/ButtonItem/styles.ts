import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.light};
  align-items: center;
  border-radius: 15px;
  margin: 18px;
  border-color: ${({ theme }) => theme.colors.dark};
  border-width: 3px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 30px;
  padding: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  flex-wrap: wrap;
`;