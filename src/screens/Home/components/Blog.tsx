import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}
export const Blog: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>Blog </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'yellow',
  },
});
