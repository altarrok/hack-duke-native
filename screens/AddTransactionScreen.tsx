import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, Platform, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { Text, View } from '../components/Themed';
import { addTransactionAction } from '../features/carbon-footprint-tracker/src/CarbonFootprintTrackerActions';
import uuid from 'react-native-uuid';
import { RootStackScreenProps } from '../types';

class AddTransactionScreen extends React.Component<typeof mapDispatchToProps & ReturnType<typeof mapStateToProps> & RootStackScreenProps<'AddTransaction'>> {
  readonly state = {
    text: "",
    number: 0
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>AddTransaction</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState((state) => ({ ...state, text }))}
          value={this.state.text}
          placeholder="Product Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={(number) => this.setState((state) => ({ ...state, number: Number(number) }))}
          value={String(this.state.number)}
          placeholder="Amount Paid"
          keyboardType="numeric"
        />
        <Button
          onPress={() => {
            this.props.addTransaction({
              transaction: {
                amount: this.state.number,
                itemName: this.state.text,
                id: uuid.v4() as string
              }
            });
            this.props.navigation.navigate('Root');
          }}
          title="Add Transaction"
          color="#841584"
        />
        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
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

const mapStateToProps = (state: any) => {
  return {
  }
};

const mapDispatchToProps = {
  addTransaction: addTransactionAction.getReduxAction(),
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransactionScreen);
