import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Skeleton } from "./Skeleton";
import { useAnimation } from "./animations/useAnimation";
import { SmartImageProps } from "./types";

export const SmartImage = ({
  source,
  style,
  animation = "fade",
  animationDuration = 400,
  skeletonColor = "#E5E5E5",
}: SmartImageProps) => {
  const loaded = useSharedValue(false);
  const animatedStyle = useAnimation(animation, loaded, animationDuration);
  const skeletonAnimatedStyle = useAnimatedStyle(() => {
    const isLoaded = loaded.value;
    return {
      opacity: withTiming(isLoaded ? 0 : 1, { duration: 200 }),
      zIndex: isLoaded ? -1 : 1,
    };
  });

  return (
    <View>
      <Animated.Image
        source={source}
        resizeMode="cover"
        onLoad={() => {
          loaded.value = true;
        }}
        style={[style, animatedStyle]}
      />

      <Animated.View
        style={[
          style,
          skeletonAnimatedStyle,
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          },
        ]}
      >
        <Skeleton
          style={{ width: "100%", height: "100%" }}
          color={skeletonColor}
        />
      </Animated.View>
    </View>
  );
};

export default SmartImage;
