import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface SkeletonProps {
  style?: StyleProp<ViewStyle>;
  color?: string;
}

export const Skeleton = ({ style, color = "#E5E5E5" }: SkeletonProps) => {
  return (
    <View
      style={[
        {
          backgroundColor: color,
        },
        style,
      ]}
    />
  );
};
