import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Navigator from 'native-navigation';
import { SCREENTHREE } from '../routes';
import {SCREENFOUR} from '../routes';
import Screen from '../components/Screen';

class ScreenTwo extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Smart Card number:12345678912345678</Text>
          <View style={styles.balence}>
            <Text style={styles.bold}>Balence</Text>
            <Text style={styles.cost}>£36.00</Text>
          </View>

          <Text style={styles.indent}>On 12 Dec 2017 at 21:08 </Text>
          <Button
            title="Top up History"
            onPress={() => Navigator.push(SCREENTHREE)}
          />
          <Text style={styles.bold}>Choose Amount</Text>
          <Text style={styles.indent}>Top up at least £5-no more than£99</Text>

          <View style={styles.balence}>
            <Text style={styles.pound}>£</Text>
            <Text style={styles.amount}>05.00</Text>
          </View>

        <View style={styles.balence}>
          <Text> You last topped up: </Text>
          <Text style={styles.price}> £50 </Text>
       </View>
      <Text> On 5 November 2017 at 16:40pm </Text>

      <Button
        title="Top up"
        onPress={() => Navigator.push(SCREENFOUR)}
      />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    balence:{
    //flex:1,
    flexDirection:'row',
    marginBottom:10,


    },

    cost:{
      marginTop:20,
    marginLeft:50,
    fontSize:25,
    color:'navy'

    },

    bold:{
    marginTop:30,
    marginRight:100,
    marginLeft:20,
    fontSize:20,
    color:'black',
    },
indent:{
  alignSelf:'flex-start',
  marginLeft:20,
},

pound:{
  fontSize:70,
  color:'navy',
  flexBasis:100,

},

amount:{
  fontSize:70,
  color:'black',

},

price:{
  color:'navy',
  fontSize:25,
  marginLeft:80,
},


});
export default ScreenTwo;
