import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from './Themed';
import { ScrollView, StyleSheet } from 'react-native';
import { Transaction, TransactionFootprint } from "../features/carbon-footprint-tracker/src/CarbonFootprintTrackerTypes";

export class TransactionEntry extends React.Component<{ transaction: Transaction, transactionFootprint: TransactionFootprint }> {
    render() {
        return (
                <View style={styles.transactionContainer}>
                    <View style={styles.transactionPart}>
                        <Text style={styles.transactionText}>{this.props.transaction.itemName}</Text>
                        <Text style={[styles.transactionTextRight, styles.transactionText]}>${this.props.transaction.amount}</Text>
                    </View>
                    <View style={styles.transactionPart}>
                        <Text style={styles.transactionText}>24/10/2021</Text>
                        <Text style={[styles.transactionTextRight, styles.transactionText]}><FontAwesome size={16} name="cloud" /> {this.props.transactionFootprint?.carbonEmissionInGrams || '...'}gr of CO2</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    transactionContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 20,
        paddingBottom: 20,
        marginBottom: 8,
    },
    transactionPart: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    transactionTextRight: {
        backgroundColor: 'white',
        textAlign: 'right'
    },
    transactionText: {
        fontSize: 19
    }
});