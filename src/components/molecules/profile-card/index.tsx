import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Label, Spacer} from 'components/atoms';

import styles from './style';

type Props = {
  onPress: () => void;
  lastMessage?: string;
  source: 'profile' | 'chat';
} & Partial<ProfileType>;

const ProfileCard = ({
  firstName,
  lastName,
  className,
  rollNumber,
  picture,
  status,
  lastMessage,
  source,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.avatar}>
          <Image style={styles.avatarImage} source={{uri: `${picture}/40`}} />
        </View>
        <View style={styles.text}>
          {source === 'profile' && (
            <View style={[styles.status, styles[status]]}>
              <Label size={'m'} text={status.toUpperCase()} color={'white'} />
            </View>
          )}

          <View style={styles.row}>
            <Label text={'Name: '} weight={'bold'} />
            <Label text={`${firstName} ${lastName}`} size={'m'} />
          </View>

          <View style={styles.row}>
            <Label text={'Class: '} weight={'bold'} />
            <Label text={className} size={'m'} />
          </View>

          <View style={styles.row}>
            <Label text={'Roll No: '} weight={'bold'} />
            <Label text={rollNumber} size={'m'} />
          </View>

          {source === 'chat' && (
            <>
              <Spacer size="xm" />
              <Label
                text={lastMessage}
                size={'m'}
                color={'lightTextGrey'}
                style={{flex: styles.card.flex}}
              />
            </>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;
