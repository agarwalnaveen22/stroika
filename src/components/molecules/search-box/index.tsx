import {Sizes} from 'common';
import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './style';

type Props = InputBoxType;

const SearchBox = ({placeholder, onChangeText, value}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchIconContainer}>
          <Icon name="search" size={Sizes.xl} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
          />
        </View>
      </View>
    </>
  );
};

export default SearchBox;
