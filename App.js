import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector } from 'react-redux';

export default function App() {
  const counter = useSelector(state => state.counter)
  return (
    <View style={styles.container}>
      <Text>Counter:</Text>
      <Text>{counter}</Text>
      <View style={{ flexWrap: 'wrap', width: 100, height: 10 }}>
        <View style={{ width: 40, marginRight: 20 }}>
          <Button
            title="+"
            width="20px">
          </Button>
        </View>
        <View style={{ width: 40 }}>
          <Button
            title="-"
            width="20px">
          </Button>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
