import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ViewLabel = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Input = styled.TextInput`
  flex: 0.9;
  flex-direction: row;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-width: 0.4px;
`;

export const ViewButton = styled.View`
  flex-direction: row;
  width: 90%;
  margin-bottom: 8px;
`;

export const LoginButton = styled.TouchableOpacity`
  flex: 1;
  background: #8a2be2;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  height: 36px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;
