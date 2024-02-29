import React, {FC, useRef, useState} from 'react';
import {
  NativeModules,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {HomeMyLocation, MyHomeMyLocationRef} from '../../components';

import LinearGradient from 'react-native-linear-gradient';
import {Blog} from './components/Blog';
import {BrandService} from './components/BrandService';
import {Category} from './components/Category';
import {FlashSale} from './components/FlashSale';
import {Header} from './components/Header';
import {MemberCard} from './components/MemberCard';
import {Slider} from './components/Slider';
const {StatusBarManager} = NativeModules;
const _screen_statusbar_height = StatusBarManager.HEIGHT;
const DEFAULT_GRADIENT_COLOR = ['#FFFFFF', '#FAFAFA', '#FFF3E0'];
const WHITE_GRADIENT_COLOR = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];

interface Props {}
export const Home: FC<Props> = () => {
  const myHomeMyLocationRef = useRef<MyHomeMyLocationRef>(null);

  const [gradientColor, setGradientColor] = useState(DEFAULT_GRADIENT_COLOR);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    console.log('f :>> ', offsetY);
    const maxOffset = 20; // Điều chỉnh giá trị này để tăng hoặc giảm độ nhạy cảm
    if (offsetY > maxOffset) {
      const newColor = WHITE_GRADIENT_COLOR;
      setGradientColor(newColor);
      myHomeMyLocationRef.current?.scaleView();
    }
    if (offsetY < 0) {
      setGradientColor(DEFAULT_GRADIENT_COLOR);
      myHomeMyLocationRef.current?.resetScale();
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 1.0}}
        end={{x: 0, y: 0.0}}
        colors={gradientColor}
        style={styles.linearGradient}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        stickyHeaderIndices={[0]}
        contentContainerStyle={{paddingTop: _screen_statusbar_height}}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => console.log('Pull to refresh')}
          />
        }>
        <Header />
        <MemberCard />
        <BrandService />
        <Slider />
        <FlashSale />
        <Blog />
        <Category />
      </ScrollView>
      <HomeMyLocation ref={myHomeMyLocationRef} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    width: '100%',
    height: 400,
    zIndex: -1,
    position: 'absolute',
  },
});
