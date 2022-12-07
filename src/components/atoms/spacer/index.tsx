import React from 'react';
import {View} from 'react-native';
import {Sizes} from 'common';

type Props = {
  type?: 'Horizontal' | 'Vertical';
  size?: keyof typeof Sizes;
};

const Spacer = ({type, size = 's'}: Props) => {
  return type === 'Horizontal' ? (
    <View style={{width: Sizes[size], height: Sizes.xs}} />
  ) : (
    <View style={{width: Sizes.xs, height: Sizes[size]}} />
  );
};

export default Spacer;
