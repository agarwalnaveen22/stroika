import React from 'react';
import {Text, TextStyle} from 'react-native';
import {Colors, Sizes} from 'common';

export type Props = {
  size?: keyof typeof Sizes;
  color?: keyof typeof Colors;
  weight?: TextStyle['fontWeight'];
  style?: TextStyle;
} & LabelType;

const Label = ({
  text,
  size = 'l',
  color = 'black',
  weight = '500',
  style,
  align,
}: Props) => {
  return (
    <Text
      style={[
        {
          fontSize: Sizes[size],
          color: Colors[color],
          fontWeight: weight,
          textAlign: align,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default Label;
