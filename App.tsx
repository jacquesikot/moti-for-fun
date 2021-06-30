import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import AnimatePresence from './src/AnimatePresence';
import AnimateHeight from './src/AnimateHeight';
import ExitBeforeEnter from './src/ExitBeforeEnter';
import Loop from './src/Loop';
import AnimatedForm from './src/AnimatedForm';

export default function App() {
  return (
    <SafeAreaView>
      <AnimatedForm />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
