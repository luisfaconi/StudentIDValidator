import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store';
import { Provider } from 'react-redux';

import React, { useState } from 'react';
import QRCodeScanner from './src/components/QRCodeScanner';

export default function App() {
  const [scannedText, setScannedText] = useState('');

  const handleQRCodeRead = (data) => {
    setScannedText(data);
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! {scannedText}</Text>
        <StatusBar style="auto" />
        {scannedText === '' && (
          <QRCodeScanner onQRCodeRead={handleQRCodeRead} />
        )}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
