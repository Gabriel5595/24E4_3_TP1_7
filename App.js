import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={decrement} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Pressable onPress={increment} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    padding: 15,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});
