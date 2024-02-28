import React, {FC, useRef} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {HomeMyLocation, MyHomeMyLocationRef} from '../../components';

interface Props {}
export const Home: FC<Props> = () => {
  const myHomeMyLocationRef = useRef<MyHomeMyLocationRef>(null);

  return (
    <SafeAreaView style={styles.container}>
      <HomeMyLocation ref={myHomeMyLocationRef} />
      <TouchableOpacity
        onPress={() => myHomeMyLocationRef.current?.scaleView()}>
        <Text>Scale</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => myHomeMyLocationRef.current?.resetScale()}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
