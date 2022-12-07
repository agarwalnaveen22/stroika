import React from 'react';
import {View} from 'react-native';
import {Label, Spacer} from 'components/atoms';

import styles from './style';

type Props = {
  label: string;
  value: string | number | undefined;
};

const ProfileRow = ({label, value}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <Label text={label} weight={'700'} />
        <Spacer type="Horizontal" size={'m'} />
        <Label text={value} size={'m'} />
      </View>
    </>
  );
};

export default ProfileRow;
