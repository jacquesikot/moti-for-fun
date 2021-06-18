import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { MotiView } from 'moti'

export default function App() {
  return (
    <View style={styles.container}>
     <HelloWorld />
      <StatusBar style="auto" />
    </View>
  );
}

function Shape() {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        type: 'timing',
      }}
      style={styles.shape}
    />
  )
}

function HelloWorld() {
  const [visible, toggle] = useReducer((s) => !s, true)

  return (
    <Pressable onPress={toggle} style={styles.container}>
      {visible && <Shape />}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#9c1aff',
  },
});
