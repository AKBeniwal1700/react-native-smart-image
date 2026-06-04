import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { AnimationType } from "../types";

export const useAnimation = (
  animation: AnimationType,
  loaded: boolean,
  duration: number
) => {
  return useAnimatedStyle(() => {
    const opacity = withTiming(loaded ? 1 : 0, { duration });

    switch (animation) {
      case "slide-up":
        return {
          opacity,
          transform: [
            {
              translateY: withTiming(loaded ? 0 : 30, { duration }),
            },
          ],
        };

      case "slide-down":
        return {
          opacity,
          transform: [
            {
              translateY: withTiming(loaded ? 0 : -30, { duration }),
            },
          ],
        };

      case "slide-left":
        return {
          opacity,
          transform: [
            {
              translateX: withTiming(loaded ? 0 : -30, { duration }),
            },
          ],
        };

      case "slide-right":
        return {
          opacity,
          transform: [
            {
              translateX: withTiming(loaded ? 0 : 30, { duration }),
            },
          ],
        };

      case "zoom-out":
        return {
          opacity,
          transform: [
            {
              scale: withTiming(loaded ? 1 : 1.3, { duration }),
            },
          ],
        };

      case "fold-out":
        return {
          opacity,
          transform: [
            {
              perspective: 1000,
            },
            {
              rotateX: withTiming(loaded ? "0deg" : "-90deg", { duration }),
            },
            {
              scale: withTiming(loaded ? 1 : 0.8, { duration }),
            },
          ],
        };

      case "fade":
      default:
        return {
          opacity,
        };
    }
  });
};
