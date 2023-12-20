import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  align-items: center;
  border-radius: 15px;
  margin: 12px 12px 15px 12px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 36px;
  padding: 15px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-align: center;
  flex-wrap: wrap;
`;