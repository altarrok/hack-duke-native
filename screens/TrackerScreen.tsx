import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { connect } from 'react-redux';
import { addPlugin } from '../store/Plugin';
import { CarbonFootprintTracker, CarbonFootprintTrackerPlugin } from '../features/carbon-footprint-tracker';
import { selectMerchantCategories, selectTotalFT } from '../features/carbon-footprint-tracker/src/CarbonFootprintTrackerSelectors';

class TrackerScreen extends React.Component<typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>> {
  constructor(props: any) {
    super(props);
    this.props.addPlugin(CarbonFootprintTrackerPlugin);
  }

  render() {
    return (
      <View style={styles.container}>
        <CarbonFootprintTracker />
        <View style={styles.circleContainer}>
          <Text style={{ fontSize: 32, fontWeight: 'bold' }}>{this.props.totalFT}gr of CO2</Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.boxContainer}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
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
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'red',
    padding: 16,
    marginTop: 128,
    marginBottom: 128
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    margin: 16,
    paddingRight: 32,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 16,
    margin: 4
  }
});

const mapStateToProps = (state: any) => {
  return { 
    merchantCategories: selectMerchantCategories(state),
    totalFT: selectTotalFT(state)
  }
};

const mapDispatchToProps = {
  addPlugin,
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackerScreen);