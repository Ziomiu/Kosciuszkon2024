import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
  
  return (
    <View style={styles.container}>
      {userData && userData.name && (
        <Text>Witaj {userData.name}</Text>
      )}
      {userData && userData.userBalanceId.balance && (
        <Text>Masz {userData.userBalanceId.balance} zł</Text>
      )}
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default HomeScreen;
