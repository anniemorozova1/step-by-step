import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableHighlight } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}></View>
      <Text style={styles.text}>Step By Step</Text>
      <StatusBar style="auto" />
      <TouchableHighlight onPress={() => Alert.alert('Welcome')}>
        <View>
          <Image
            source={{uri:'https://images.vexels.com/media/users/3/181775/isolated/preview/ff2947607b1af2e4a62a06537e292424-lightning-icon-by-vexels.png'}}
            style={styles.thunder}
          />
        </View>
      </TouchableHighlight>

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#606',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  navbar: {
    height: 200
  }, 
  text: {
    fontSize: 50,
    color: '#fff'
  },
  button: {
    fontSize: 30,
  },
  thunder: {
    marginTop: 45,
    marginLeft: 20,
    width: 320,
    height: 320
  }
});
