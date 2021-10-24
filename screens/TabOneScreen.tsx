import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { connect } from 'react-redux';
import { addPlugin } from '../store/Plugin';
import { CarbonFootprintTracker, CarbonFootprintTrackerPlugin } from '../features/carbon-footprint-tracker';
import { selectMerchantCategories } from '../features/carbon-footprint-tracker/src/CarbonFootprintTrackerSelectors';

class TabOneScreen extends React.Component<typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>> {
  constructor(props: any) {
    super(props);
    this.props.addPlugin(CarbonFootprintTrackerPlugin);
  }

  render() {
    let mcc = 0;
    if (!this) {
      throw Error();
    }
    if (this.props.merchantCategories.length) {
      mcc = this.props.merchantCategories[0].mcc;
    }
    return (
      <View style={styles.container}>
        <CarbonFootprintTracker />
      <Text style={styles.title}>{mcc}</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'white',
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
    merchantCategories: selectMerchantCategories(state)
  }
};

const mapDispatchToProps = {
  addPlugin,
}

export default connect(mapStateToProps, mapDispatchToProps)(TabOneScreen);