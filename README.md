# @akbeniwal/react-native-smart-image

<p align="center">
  <img src="https://img.shields.io/npm/v/@akbeniwal/react-native-smart-image.svg" alt="npm version" />
  <img src="https://img.shields.io/npm/l/@akbeniwal/react-native-smart-image.svg" alt="license" />
  <img src="https://img.shields.io/npm/dm/@akbeniwal/react-native-smart-image.svg" alt="npm downloads" />
  <img src="https://img.shields.io/github/issues/akbeniwal/react-native-smart-image.svg" alt="issues" />
</p>

A high-performance, lightweight React Native image component featuring built-in skeleton loading state placeholders and smooth, hardware-accelerated image reveal animations powered by **React Native Reanimated**.

---

## Key Features

- ⚡ **Zero-Jitter Placeholder**: Showcases a customizable skeleton loading background while the image is loading.
- 🚀 **Hardware-Accelerated Reveal Animations**: Smooth entry animations using Reanimated worklets (runs on the UI thread).
- 🎨 **Extremely Customizable**: Adjust animation types, custom durations, and skeleton colors easily.
- 📱 **Robust Layout Sync**: Keeps layout aspect ratio and styles consistent during transitions.
- 🔥 **TypeScript First**: Full type safety with out-of-the-box definitions.
- ⚙️ **Performance Tuned**: Consolidates all reveal animations into a single custom hook, reducing JS-to-Native bridge overhead.

---

## Installation

Install using **yarn**:

```bash
yarn add @akbeniwal/react-native-smart-image
```

Or using **npm**:

```bash
npm install @akbeniwal/react-native-smart-image
```

_Note: This package requires `react-native-reanimated` (v2.x, v3.x or v4.x). Ensure it is installed and configured in your project._

---

## Supported Animations

The following reveal animations are supported out-of-the-box:

- `fade` (Default)
- `slide-up`
- `slide-down`
- `slide-left`
- `slide-right`
- `zoom-out`
- `fold-out`

---

## Usage & Examples

### Basic Usage

```tsx
import React from "react";
import { SmartImage } from "@akbeniwal/react-native-smart-image";

const App = () => {
  return (
    <SmartImage
      source={{ uri: "https://picsum.photos/500" }}
      style={{
        width: 200,
        height: 200,
        borderRadius: 12,
      }}
    />
  );
};
```

---

### Customized Animations

#### Slide Up Animation

```tsx
<SmartImage
  source={{ uri: "https://picsum.photos/500" }}
  animation="slide-up"
  animationDuration={500}
  style={{ width: 200, height: 200 }}
/>
```

#### Zoom Out Animation

```tsx
<SmartImage
  source={{ uri: "https://picsum.photos/500" }}
  animation="zoom-out"
  animationDuration={700}
  style={{ width: 200, height: 200 }}
/>
```

#### Fold Out Animation

```tsx
<SmartImage
  source={{ uri: "https://picsum.photos/500" }}
  animation="fold-out"
  animationDuration={600}
  skeletonColor="#E8E8E8"
  style={{ width: 200, height: 200 }}
/>
```

---

## Component API Props

| Prop                    | Type                    | Required | Default     | Description                                                                                                        |
| :---------------------- | :---------------------- | :------- | :---------- | :----------------------------------------------------------------------------------------------------------------- |
| **`source`**            | `ImageSourcePropType`   | **Yes**  | -           | The image source (e.g. URI or local resource).                                                                     |
| **`style`**             | `StyleProp<ImageStyle>` | No       | -           | Style object applied to both the image and the skeleton wrapper.                                                   |
| **`animation`**         | `AnimationType`         | No       | `"fade"`    | The reveal animation type (`fade`, `slide-up`, `slide-down`, `slide-left`, `slide-right`, `zoom-out`, `fold-out`). |
| **`animationDuration`** | `number`                | No       | `400`       | Duration of the transition animation in milliseconds.                                                              |
| **`skeletonColor`**     | `string`                | No       | `"#E5E5E5"` | The background color of the skeleton placeholder block.                                                            |

---

## Roadmap

### 🚀 v1.1.0

- [ ] Customizable skeleton shimmer/pulse effect animation
- [ ] Error placeholder state / fallback image component
- [ ] Retry loading trigger on image press/failure

### 🚀 v1.2.0

- [ ] Blur-up placeholder reveal animation
- [ ] Progressive resolution image loading (loading a tiny thumbnail first)
- [ ] Advanced caching layer for network source images

---

## License

This project is licensed under the **MIT License** - see the LICENSE file for details.

## Author

**Abhishek Beniwal**
