import React from 'react';
import {View} from 'react-native';
import {Label, Spacer} from 'components/atoms';

import styles from './style';

type Props = {
  type: 'to' | 'from';
} & MessageType;

const ChatRow = ({message, date, type}: Props) => {
  return type === 'to' ? (
    <View style={styles.messageContainer}>
      <Label text={message} />
      <Spacer size="m" />
      <Label style={styles.chatDate} text={date} size={'xm'} />
    </View>
  ) : (
    <View style={[styles.messageContainer, styles.fromContainer]}>
      <Label text={message} style={styles.fromText} />
      <Spacer size="m" />
      <Label
        style={[styles.chatDate, styles.fromText]}
        text={date}
        size={'xm'}
      />
    </View>
  );
};

export default ChatRow;
