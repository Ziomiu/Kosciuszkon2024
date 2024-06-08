import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const onPressRegister = async () => {
        const registerResponse = await registerUser(phone, password, name, surname);
        if (registerResponse) {
            navigation.navigate('Login');
        }
    };

    const registerUser = async (phone, password, name, surname) => {
        const url = 'http://localhost:8000/api/users/';
    
        const payload = {
            phone: phone,
            password: password,
            name: name,
            surname: surname
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
                console.log('Registration successful:', data);
                return data;
            } else {
                const errorData = await response.json();
                console.error('Registration failed:', errorData);
                return null;
            }
        } catch (error) {
            console.error('Error during registration:', error);
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
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={[styles.input, { textAlign: 'center' }]}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={[styles.input, { textAlign: 'center' }]}
                placeholder="Enter surname"
                value={surname}
                onChangeText={setSurname}
            />
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
