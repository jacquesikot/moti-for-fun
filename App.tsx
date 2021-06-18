import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import AnimatePresence from './src/AnimatePresence';
import AnimateHeight from './src/AnimateHeight';
import ExitBeforeEnter from './src/ExitBeforeEnter';
import Loop from './src/Loop';

export default function App() {
  return (
    <>
      <Loop />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
