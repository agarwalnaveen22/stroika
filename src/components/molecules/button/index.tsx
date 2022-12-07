import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {Label} from 'components/atoms';

import styles from './style';

type Props = {
  text: string;
  disabled?: boolean;
  onPress: () => void;
  type?: 'Primary' | 'Secondary';
  containerStyle?: ViewStyle;
};

const Button = ({
  text,
  disabled,
  onPress,
  type = 'Primary',
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        type === 'Secondary' && styles.secondaryButton,
        disabled && styles.disabled,
        containerStyle,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Label
        style={[
          type === 'Secondary' && styles.secondaryLabel,
          disabled ? styles.disabledLabel : {},
        ]}
        text={text}
        color={'white'}
        size={'l'}
        weight={'700'}
      />
    </TouchableOpacity>
  );
};

export default Button;
