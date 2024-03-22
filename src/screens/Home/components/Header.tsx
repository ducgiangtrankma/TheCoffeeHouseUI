import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgIcon} from '../../../components/SvgIcon';
import {sizes} from '../../../utils/size';

interface Props {
  backgroundColor: string;
}
export const Header: FC<Props> = ({backgroundColor}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={styles.row}>
        <Image
          source={require('../../../assets/bubble-tea.png')}
          style={{
            height: sizes._24sdp,
            width: sizes._24sdp,
          }}
        />
        <Text style={styles.txtName}>Chào bạn mới 👋</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btnVoucher}>
          <Image
            source={require('../../../assets/voucher.png')}
            style={styles.voucherIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bellButton}>
          <SvgIcon type="FontAwesome" size={sizes._24sdp} name="bell-o" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtName: {
    fontSize: sizes._16sdp,
    fontWeight: '400',
    marginLeft: sizes._8sdp,
  },
  voucherIcon: {
    width: sizes._24sdp,
  },
  btnVoucher: {
    width: sizes._64sdp,
    height: sizes._40sdp,
    backgroundColor: '#FFFFFF',
    borderRadius: sizes._24sdp,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  bellButton: {
    width: sizes._40sdp,
    height: sizes._40sdp,
    borderRadius: 1000,
    marginLeft: sizes._16sdp,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
