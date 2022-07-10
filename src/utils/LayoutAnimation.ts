import { LayoutAnimation } from 'react-native';

export const layoutDeleteAnimConfig = {
  duration: 300,
  update: {
    // duration: 200,
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 150,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleXY,
  },
  create: {
    duration: 250,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleXY,
  },
};

export const layoutCompleteToggleAnimConfig = {
  duration: 200,
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    duration: 50,
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};
