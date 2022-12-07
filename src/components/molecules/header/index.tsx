import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Label} from 'components/atoms';

import styles from './style';
import {Colors, Sizes} from 'common';

type Props = {
  title?: string;
  hasBack?: boolean;
};

const Header = ({title, hasBack}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={styles.leftContainer}>
        {hasBack && (
          <Icon name="long-arrow-left" color={Colors.white} size={Sizes.xl} />
        )}
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        {title && <Label text={title} color={'white'} />}
      </View>
      <View style={styles.leftContainer} />
    </View>
  );
};

export default Header;
