import { ImageSourcePropType, StyleProp, ImageStyle } from "react-native";

export type AnimationType =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "fold-out"
  | "zoom-out";

export interface SmartImageProps {
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  animation?: AnimationType;
  animationDuration?: number;
  skeletonColor?: string;
}
