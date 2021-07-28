import { Alert } from 'react-native';

export const showErrors = (err: any) => {
  const errors = err.response?.data?.errors;

  if (errors) {
    for (let message in errors) {
      Alert.alert(errors[message].shift());
    }

    return;
  }

  if (err.response.data.message) {
    return Alert.alert(err.response.data.message);
  }

  return Alert.alert('Ocorreu um erro com a solicitação');
};
