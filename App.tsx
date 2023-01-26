import './global';

import * as React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WalletConnect from './components/WalletConnect';

export default function App(): JSX.Element {
  return (
    <WalletConnectProvider
      redirectUrl={
        Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}>
      <View style={styles.container}>
        <WalletConnect />
      </View>
    </WalletConnectProvider>
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
