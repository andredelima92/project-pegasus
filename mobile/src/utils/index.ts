import { Alert } from 'react-native';

export const showErrors = (err: any) => {
  if (err.response.data.message) {
    return Alert.alert(err.response.data.message);
  }

  if (!err.response.data.errors) {
    return Alert.alert('Ocorreu um erro com a solicitação');
  }

  const errors = err.response.data.errors;

  for (let message in errors) {
    Alert.alert(errors[message].shift());
  }
};
