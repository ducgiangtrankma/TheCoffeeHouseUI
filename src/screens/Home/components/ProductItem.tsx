import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
export const ProductItem: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>ProductItem</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
