import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation, handleLogin }) {
  const onPressLogin = () => {
    handleLogin();
  };

  const onPressRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { textAlign: 'center' }]}
        placeholder="Enter phone number"
        keyboardType="numeric"
        maxLength={9}
      />
      <TextInput
        style={[styles.input, { textAlign: 'center' }]}
        placeholder="Enter password"
        maxLength={9}
      />
      <Button title="Login" onPress={onPressLogin}/>
      <Button title="Register" onPress={onPressRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }
});
