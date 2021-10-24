import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function AddTransactionScreen() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AddTransaction</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Product Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeNumber(Number(text))}
        value={String(number)}
        placeholder="Amount Paid"
        keyboardType="numeric"
      />
      //todo add a button to submit - dispatch addTransaction action
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
