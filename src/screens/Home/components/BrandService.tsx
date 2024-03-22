import React, {FC} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {sizes} from '../../../utils/size';

interface Props {}
const SERVICE = [
  {
    id: 1,
    image: require('../../../assets/service_delivery.png'),
    name: 'Giao hàng',
  },
  {
    id: 2,
    image: require('../../../assets/service_mangdi.png'),
    name: 'Mang đi',
  },
  {
    id: 3,
    image: require('../../../assets/service_coffee_been.png'),
    name: 'Cà phê hạt rang',
  },
  {
    id: 4,
    image: require('../../../assets/service_change_been.png'),
    name: 'Đổi Bean',
  },
  {
    id: 5,
    image: require('../../../assets/service_bill.png'),
    name: 'Hoá đơn',
  },
];
export const BrandService: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {SERVICE.map(item => (
          <TouchableOpacity style={styles.viewItemContainer}>
            <Image source={item.image} style={styles.img} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: sizes._116sdp,
    backgroundColor: '#FFFFFF',
    borderWidth: sizes._1sdp,
    borderColor: '#E0E0E0',
    borderRadius: sizes._8sdp,
    paddingHorizontal: sizes._16sdp,
    marginTop: sizes._16sdp,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: sizes._48sdp,
    width: sizes._48sdp,
  },
  name: {
    marginTop: sizes._4sdp,
  },
  viewItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: sizes._24sdp,
  },
});
