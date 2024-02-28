import React, {forwardRef, useImperativeHandle} from 'react';

import {Dimensions, Image, StyleSheet, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const screenWidth = Dimensions.get('screen').width;
const CONTAINER_TARGET_HEIGHT = 48;
const CONTAINER_INIT_WIDTH = screenWidth - 96;
const CONTAINER_TARGET_WIDTH = screenWidth - 32;
const TEXT_TRANS_X = CONTAINER_INIT_WIDTH - CONTAINER_TARGET_WIDTH;
interface Props {}
export interface MyHomeMyLocationRef {
  scaleView: () => void;
  resetScale: () => void;
}
export const HomeMyLocation = forwardRef<MyHomeMyLocationRef, Props>(
  (props, ref) => {
    const viewContainerWidth = useSharedValue(CONTAINER_INIT_WIDTH);
    const viewContainerHeight = useSharedValue(30);
    const imagePositionY = useSharedValue(0);
    const textPositionX = useSharedValue(0);
    const textMarginTop = useSharedValue(0);
    const textTitleOpacity = useSharedValue(0);
    useImperativeHandle(
      ref,
      () => ({
        scaleView: () => {
          //Thay đổi kích thước view container
          viewContainerWidth.value = withTiming(CONTAINER_TARGET_WIDTH);
          viewContainerHeight.value = withTiming(CONTAINER_TARGET_HEIGHT);
          imagePositionY.value = withSpring(-10); // Di chuyển Icon lên 10 đơn vị
          textPositionX.value = withSpring(TEXT_TRANS_X - 12); // Di chuyển Text sang trái -X đơn vị
          textMarginTop.value = withTiming(12);
          textTitleOpacity.value = withTiming(1);
        },
        resetScale: () => {
          //Reset kích thước view container
          viewContainerWidth.value = withTiming(CONTAINER_INIT_WIDTH);
          viewContainerHeight.value = withTiming(30);
          imagePositionY.value = withSpring(0);
          textPositionX.value = withSpring(0);
          textMarginTop.value = withTiming(0);
          textTitleOpacity.value = withTiming(0);
        },
      }),
      [
        imagePositionY,
        textMarginTop,
        textPositionX,
        textTitleOpacity,
        viewContainerHeight,
        viewContainerWidth,
      ],
    );

    const animatedStyle = useAnimatedStyle(() => {
      return {
        width: viewContainerWidth.value,
        height: viewContainerHeight.value,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 8,

        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
        borderRadius:
          viewContainerHeight.value === CONTAINER_TARGET_HEIGHT ? 8 : 16,
      };
    });

    const iconAnimatedStyles = useAnimatedStyle(() => {
      return {
        transform: [{translateY: imagePositionY.value}],
        flexDirection: 'row',
      };
    });

    const textAnimatedStyles = useAnimatedStyle(() => {
      return {
        transform: [{translateX: textPositionX.value}],
        marginTop: textMarginTop.value,
        width: '100%',
        marginLeft: textTitleOpacity.value === 0 ? -56 : 0,
      };
    });

    const textTitleAnimatedStyles = useAnimatedStyle(() => {
      return {
        opacity: textTitleOpacity.value,
      };
    });

    const textDescriptionWidth = useAnimatedStyle(() => {
      return {
        width:
          viewContainerWidth.value -
          (viewContainerHeight.value === CONTAINER_TARGET_HEIGHT ? 16 : 36),
      };
    });
    return (
      <Animated.View style={[animatedStyle, styles.viewContainerShadow]}>
        <Animated.View style={[iconAnimatedStyles, styles.row]}>
          <Image
            source={require('../../assets/delivery.png')}
            style={styles.image}
          />
          <Animated.View style={textTitleAnimatedStyles}>
            <Text style={{marginLeft: 4}}>Giao đến</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[textAnimatedStyles]}>
          <Animated.View style={textDescriptionWidth}>
            <Text style={[{fontSize: 12, width: '100%'}]} numberOfLines={1}>
              XQJQ+6XF nhà A, P. Đại An, Văn Quán, Hà Đông, Hà Nôi, Việt Nam
            </Text>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    );
  },
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 16,
    height: 16,
  },
  viewContainerShadow: {
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
