import * as React from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { connect } from 'react-redux';
import { addPlugin } from '../store/Plugin';
import { CarbonFootprintTracker, CarbonFootprintTrackerPlugin } from '../features/carbon-footprint-tracker';
import { selectMerchantCategories, selectTotalFT } from '../features/carbon-footprint-tracker/src/CarbonFootprintTrackerSelectors';
import Colors from '../constants/Colors';

class InitiativesScreen extends React.Component<typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 16 }}>Gain carbon credits by contributing to projects that are working to lower CO2 emissions, globally.</Text>
        <ScrollView horizontal={true} contentContainerStyle={styles.boxContainer}>
          <View style={styles.box}>
            <View style={{ width: '100%', height: '60%', borderRadius: 16 }} />
            <View style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, padding: 16 }}>
              <Text style={{ color: 'white' }}>Carbon Busters</Text>
              <Text style={{ color: 'white' }}>U$2.09/100kg</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{ width: '100%', height: '60%', borderRadius: 16 }} />
            <View style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, padding: 16 }}>
              <Text style={{ color: 'white' }}>Carbon Busters</Text>
              <Text style={{ color: 'white' }}>U$2.09/100kg</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{ width: '100%', height: '60%', borderRadius: 16 }} />
            <View style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, padding: 16 }}>
              <Text style={{ color: 'white' }}>Carbon Busters</Text>
              <Text style={{ color: 'white' }}>U$2.09/100kg</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{ width: '100%', height: '60%', borderRadius: 16 }} />
            <View style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, padding: 16 }}>
              <Text style={{ color: 'white' }}>Carbon Busters</Text>
              <Text style={{ color: 'white' }}>U$2.09/100kg</Text>
            </View>
          </View>
          <View style={styles.box}>
            <View style={{ width: '100%', height: '60%', borderRadius: 16 }} />
            <View style={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, padding: 16 }}>
              <Text style={{ color: 'white' }}>Carbon Busters</Text>
              <Text style={{ color: 'white' }}>U$2.09/100kg</Text>
            </View>
          </View>

        </ScrollView>
        <View style={{ marginBottom: 128 }}>
          <Button title={"Proceed to Checkout"} onPress={() => { }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    backgroundColor: 'white',
    padding: 24
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    marginTop: 16,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 0,
    paddingRight: 32,
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: Colors.light.background,
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

export default connect(mapStateToProps, mapDispatchToProps)(InitiativesScreen);