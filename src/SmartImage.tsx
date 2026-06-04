import { useState } from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";
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
  const [loaded, setLoaded] = useState(false);

  const animatedStyle = useAnimation(animation, loaded, animationDuration);

  return (
    <View>
      {!loaded && <Skeleton style={style} color={skeletonColor} />}

      <Animated.Image
        source={source}
        resizeMode="cover"
        onLoad={() => setLoaded(true)}
        style={[
          style,
          animatedStyle,
          !loaded && {
            position: "absolute",
            opacity: 0,
          },
        ]}
      />
    </View>
  );
};

export default SmartImage;
