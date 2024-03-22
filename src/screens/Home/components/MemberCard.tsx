import React, {FC} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {_screen_width, sizes} from '../../../utils/size';

interface Props {}
export const MemberCard: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/Card-member-1.png')}
        style={styles.imageBg}
        resizeMode="cover"
        imageStyle={{borderRadius: sizes._8sdp}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: sizes._16sdp,
    height: sizes._146sdp,
    backgroundColor: '#FFFFFF',
  },
  imageBg: {
    width: _screen_width - sizes._32sdp,
    height: sizes._146sdp,
  },
});
