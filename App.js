import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions'

export default function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Counter:</Text>
      <Text>{counter}</Text>
      <View style={{ flexWrap: 'wrap', width: 100, height: 10 }}>
        <View style={{ width: 40, marginRight: 20 }}>
          <Button
            onPress={() => dispatch(increment())}
            title="+"
            width="20px">
          </Button>
        </View>
        <View style={{ width: 40 }}>
          <Button
            onPress={() => dispatch(decrement())}
            title="-"
            width="20px">
          </Button>
        </View>
      </View>
      {isLogged ? (< View style={{ marginTop: 40 }}>
        <Button
          onPress={() => dispatch(login())}
          title="Logout"
          backgroundColor="green">
        </Button>
      </View>) :
        < View style={{ marginTop: 40 }}>
          <Button
            onPress={() => dispatch(login())}
            title="Login">
          </Button>
        </View>
      }


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
