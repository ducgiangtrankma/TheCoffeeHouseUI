import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
export const Slider: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Slider </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
  },
});
