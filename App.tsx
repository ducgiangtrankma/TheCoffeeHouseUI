import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Home} from './src/screens/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  image: {
    width: 16,
    height: 16,
  },
});
export default App;
