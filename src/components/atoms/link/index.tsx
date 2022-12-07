import React from 'react';
import {TouchableOpacity} from 'react-native';
import Label, {Props as TextProps} from '../label';

type Props = {
  onPress: () => void;
} & TextProps;

const Spacer = ({onPress, ...props}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Label {...props} />
    </TouchableOpacity>
  );
};

export default Spacer;
