import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedData = JSON.parse(await AsyncStorage.getItem('data'));
        setUserData(storedData);
      } catch (error) {
        console.error('Failed to load data from AsyncStorage:', error);
      }
    };

    fetchUserData();
  }, []);
  
  const onPressWithdraw = () => {
    return true;
  };

  return (
    <View style={styles.container}>
      {userData && userData.name && (
        <Text style={styles.welcomeText}>Hello {userData.name}!</Text>
      )}
      {userData && userData.userBalanceId.balance && (
        <Text style={styles.balanceText}>Your balance: {userData.userBalanceId.balance} zł</Text>
      )}
      {!userData && (
        <>
          <Text style={styles.welcomeText}>Hello    !</Text>
          <Text style={styles.balanceText}>Your balance: 10 zł</Text>
        </>
      )}
      <Button title="Withdraw" onPress={onPressWithdraw} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    position: 'absolute',
    top: 150, 
    textAlign: 'center',
    width: '100%',
    fontSize: 24,
    fontWeight: 'bold',  
  },
  balanceText: {
    marginTop: 80,
    textAlign: 'center',
    fontSize: 18,
    bottom: 40 
  },
});

export default HomeScreen;
