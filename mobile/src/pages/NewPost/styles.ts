import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin: 12px;
`;

export const TextAreaView = styled.View`
  border: 1px solid black;
  border-radius: 8px;
`;

export const TextArea = styled.TextInput`
  height: 150px;
`;

export const ButtonView = styled.View`
  margin-top: 12px;
`;

export const EditButton = styled.TouchableOpacity`
  background: #8a2be2;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  height: 36px;
`;

export const TextButton = styled.Text`
  color: #fff;
`;
