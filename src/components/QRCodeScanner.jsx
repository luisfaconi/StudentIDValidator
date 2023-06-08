import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

const QRCodeScanner = ({ onQRCodeRead }) => {
  const [cameraReady, setCameraReady] = useState(false);

  const handleQRCodeRead = ({ data }) => {
    onQRCodeRead(data);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCameraReady(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={handleQRCodeRead}
      >
        {cameraReady && (
          <View style={styles.overlay}>
            <View style={styles.scanArea} />
          </View>
        )}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanArea: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
});

export default QRCodeScanner;
