import React from 'react';
import {TextInput, View, ViewStyle} from 'react-native';

import styles from './style';

type Props = {
  containerStyle?: ViewStyle;
} & InputBoxType;

const InputBox = ({
  placeholder,
  onChangeText,
  value,
  multiline,
  containerStyle,
}: Props) => {
  return (
    <>
      <View style={[styles.container, containerStyle]}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            multiline={multiline}
          />
        </View>
      </View>
    </>
  );
};

export default InputBox;
