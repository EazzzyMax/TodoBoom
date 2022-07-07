import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const CreateIcon = () => (
  <Svg width={30} height={30} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M27.5 2.5 13.75 16.25M27.5 2.5l-8.75 25-5-11.25-11.25-5 25-8.75Z'
      stroke='#555'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
