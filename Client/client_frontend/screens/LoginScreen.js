import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation, handleLogin }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = async () => {
    const loginResponse = await loginUser(phone, password);
    if (loginResponse) {
      handleLogin(1);
    }
  };

  const onPressRegister = () => {
    navigation.navigate('Register');
  };

  const loginUser = async (phone, password) => {
    const url = 'http://localhost:8000/api/login/';

    const payload = {
        phone: phone,
        password: password
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login successful:', data);
            localStorage.setItem('accessToken', data.access);
            localStorage.setItem('refreshToken', data.refresh);

            return data;
        } else {
            const errorData = await response.json();
            console.error('Login failed:', errorData);
            return null;
        }
    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, { textAlign: 'center' }]}
        placeholder="Enter phone number"
        keyboardType="numeric"
        maxLength={9}
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={[styles.input, { textAlign: 'center' }]}
        placeholder="Enter password"
        secureTextEntry
        maxLength={9}
        value={password}
        onChangeText={setPassword}
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
