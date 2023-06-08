import React from 'react';
import { View, Modal, ActivityIndicator, Text, StyleSheet } from 'react-native';

const LoadingOverlay = ({ visible, text }) => {
  if (!visible) {
    return null;
  }

  return (
    <Modal transparent={true} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#000" />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoadingOverlay;