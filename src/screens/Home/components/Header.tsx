import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
export const Header: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    marginBottom: 20,
    // backgroundColor: 'transparent',
    backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
