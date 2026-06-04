import { SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { AnimationType } from "../types";

export const useAnimation = (
  animation: AnimationType,
  loaded: SharedValue<boolean>,
  duration: number
) => {
  return useAnimatedStyle(() => {
    const isLoaded = loaded.value;
    const opacity = withTiming(isLoaded ? 1 : 0, { duration: 200 });

    switch (animation) {
      case "slide-up":
        return {
          opacity,
          transform: [
            {
              translateY: withTiming(isLoaded ? 0 : 30, { duration }),
            },
          ],
        };

      case "slide-down":
        return {
          opacity,
          transform: [
            {
              translateY: withTiming(isLoaded ? 0 : -30, { duration }),
            },
          ],
        };

      case "slide-left":
        return {
          opacity,
          transform: [
            {
              translateX: withTiming(isLoaded ? 0 : -30, { duration }),
            },
          ],
        };

      case "slide-right":
        return {
          opacity,
          transform: [
            {
              translateX: withTiming(isLoaded ? 0 : 30, { duration }),
            },
          ],
        };

      case "zoom-out":
        return {
          opacity,
          transform: [
            {
              scale: withTiming(isLoaded ? 1 : 1.3, { duration }),
            },
          ],
        };

      case "zoom-in":
        return {
          opacity,
          transform: [
            {
              scale: withTiming(isLoaded ? 1 : 0.7, { duration }),
            },
          ],
        };

      case "fold-out":
        return {
          opacity,
          // @ts-ignore - transformOrigin is supported in RN 0.73+ but might be missing in some older TS types
          transformOrigin: ["0%", "0%", 0],
          transform: [
            {
              perspective: 1000,
            },
            {
              rotateX: withTiming(isLoaded ? "0deg" : "30deg", { duration }),
            },
            {
              rotateY: withTiming(isLoaded ? "0deg" : "-30deg", { duration }),
            },
            {
              rotate: withTiming(isLoaded ? "0deg" : "-15deg", { duration }),
            },
            {
              scale: withTiming(isLoaded ? 1 : 0.9, { duration }),
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
