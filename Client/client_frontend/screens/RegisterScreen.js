import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function RegisterScreen({ navigation }) {
    const onPressRegister = () => {
        navigation.navigate('Login');
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
            />
            <TextInput
                style={[styles.input, { textAlign: 'center' }]}
                placeholder="Enter name"
            />
            <TextInput
                style={[styles.input, { textAlign: 'center' }]}
                placeholder="Enter surname"
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
