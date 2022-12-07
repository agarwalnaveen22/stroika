import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, ListRenderItem, SafeAreaView, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamsList} from 'routes';
import {Button, ChatRow, Header, InputBox} from 'components/molecules';
import {Spacer} from 'components/atoms';

import styles from './style';
import {addStudentChat, filterStudent, getProfiles} from 'utils/filter';

type Props = {
  route: RouteProp<RootStackParamsList, 'Chat'>;
};

const Chat = ({route}: Props) => {
  const listViewRef = useRef();
  const {id: profileId} = route.params;
  const [studentsData, setStudentsData] = useState<Array<ProfileType>>([]);
  const [profileData, setProfileData] = useState<ProfileType>();
  const [chatMessage, setChatMessage] = useState<string>('');

  const renderChat: ListRenderItem<MessageType> = useCallback(({item}) => {
    return (
      <ChatRow
        message={item.message}
        date={item.date}
        to={item.to}
        from={item.from}
        type={item.from !== 'admin' ? 'from' : 'to'}
      />
    );
  }, []);

  const reloadData = useCallback(() => {
    getProfiles().then(data => {
      setStudentsData(data);
      const studentProfile = filterStudent(profileId, data);
      setProfileData(studentProfile);
    });
  }, [profileId]);

  const addStudentReply = useCallback(
    (obj: MessageType) => {
      addStudentChat(profileId, obj, studentsData)
        .then(() => {
          setChatMessage('');
          reloadData();
        })
        .catch(error => {
          console.log(error);
        });
    },
    [profileId, reloadData, studentsData],
  );

  const submitMessage = useCallback(() => {
    const obj = {
      to: 'admin',
      from: profileData?.firstName.toLowerCase(),
      message: chatMessage,
      date: new Date().toISOString(),
    };
    addStudentChat(profileId, obj, studentsData)
      .then(() => {
        const obj = {
          to: profileData?.firstName.toLowerCase(),
          from: 'admin',
          message: 'This is an automated reply',
          date: new Date().toISOString(),
        };
        setChatMessage('');
        reloadData();
        setTimeout(() => addStudentReply(obj), 2000);
      })
      .catch(error => {
        console.log(error);
      });
  }, [
    addStudentReply,
    chatMessage,
    profileData?.firstName,
    profileId,
    reloadData,
    studentsData,
  ]);

  useEffect(() => {
    reloadData();
  }, [profileId, reloadData]);

  return (
    <SafeAreaView style={styles.container}>
      {profileData && (
        <>
          <Header
            hasBack
            title={`${profileData.firstName} ${profileData.lastName}`}
          />
          <Spacer size="m" />
          <View style={styles.body}>
            <FlatList
              data={profileData?.chats}
              renderItem={renderChat}
              ref={listViewRef}
              onContentSizeChange={() =>
                listViewRef?.current?.scrollToEnd({animated: true})
              }
            />
          </View>
          <View style={styles.footer}>
            <InputBox
              placeholder="Type here the message..."
              onChangeText={(text: string) => setChatMessage(text)}
              value={chatMessage}
              multiline
              containerStyle={{width: '75%'}}
            />
            <Button
              text="Send"
              containerStyle={{width: '20%'}}
              onPress={submitMessage}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Chat;
