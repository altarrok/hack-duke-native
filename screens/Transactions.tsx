import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Text, View } from '../components/Themed';
import { TransactionEntry } from '../components/TransactionEntry';
import { addTransactionAction } from '../features/carbon-footprint-tracker/src/CarbonFootprintTrackerActions';
import { selectTotalFT, selectTransactionFootprints, selectTransactions } from '../features/carbon-footprint-tracker/src/CarbonFootprintTrackerSelectors';
import { Transaction, TransactionFootprint } from '../features/carbon-footprint-tracker/src/CarbonFootprintTrackerTypes';
import { addPlugin } from '../store/Plugin';
import uuid from 'react-native-uuid';

class TransactionsSecreen extends React.Component<typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 16, textAlign: 'left', marginLeft: 18, marginTop: 20 }}>Monthly CO2 footprint</Text>
        <Text style={{ fontSize: 32, textAlign: 'left', marginLeft: 18, marginTop: 16, marginBottom: 16 }}>{this.props.totalTF}gr of CO2</Text>
        <ScrollView>
          {this.props.transactions.map((transaction: Transaction, index) => <TransactionEntry key={index} transaction={transaction} transactionFootprint={this.props.transactionFootprints[transaction.id]} />)}
          <View style={{ height: 128, backgroundColor: '#fafafa' }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
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
});

const mapStateToProps = (state: any) => {
  return {
    transactions: selectTransactions(state),
    transactionFootprints: selectTransactionFootprints(state),
    totalTF: selectTotalFT(state)
  }
};

const mapDispatchToProps = {
  addPlugin,
  addTransaction: addTransactionAction.getReduxAction(),
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsSecreen);
