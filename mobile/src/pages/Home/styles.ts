import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #eceff9;
`;

export const ViewLogin = styled(Container)`
  justify-content: center;
  align-items: center;
`;

export const Page = styled.ScrollView``;

export const Content = styled.View`
  margin: 12px 12px 0 12px;
  padding: 8px;
  border-radius: 8px;
  background: #fff;
`;

export const Name = styled.Text`
  color: #9933ff;
`;

export const Date = styled.Text`
  color: #6a6c6a;
`;

export const EditText = styled.Text`
  color: #4b4b48;
  margin-right: 16px;
`;

export const DeleteText = styled.Text`
  color: #f13304;
`;

export const DateView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Description = styled.Text`
  padding: 4px 0;
`;

export const ViewButtons = styled.View`
  margin: 0 0 8px 18px;
  flex-direction: row;
`;
