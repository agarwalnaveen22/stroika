import React, {useCallback, useEffect, useState} from 'react';
import {Image, SafeAreaView, Switch, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, Header, ProfileRow} from 'components/molecules';
import {Label, Spacer} from 'components/atoms';

import styles from './style';
import {Colors} from 'common';
import {RootStackParamsList} from 'routes';
import {RouteProp} from '@react-navigation/native';
import {filterStudent, getProfiles, updateStudentStatus} from 'utils/filter';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
  route: RouteProp<RootStackParamsList, 'Profile'>;
};

const Profile = ({navigation, route}: Props) => {
  const {id: profileId} = route.params;
  const [studentsData, setStudentsData] = useState<Array<ProfileType>>([]);
  const [profileData, setProfileData] = useState<ProfileType>();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const renderRow = useCallback(
    (label: string, value: string | number | undefined) => {
      return (
        <>
          <Spacer size={'xm'} />
          <ProfileRow label={label} value={value} />
        </>
      );
    },
    [],
  );

  const enableProfile = useCallback(() => {
    updateStudentStatus(profileId, !isEnabled, studentsData);
    setIsEnabled(previousState => !previousState);
  }, [isEnabled, profileId, studentsData]);

  useEffect(() => {
    getProfiles().then(data => {
      setStudentsData(data);
      const studentProfile = filterStudent(profileId, data);
      setProfileData(studentProfile);
      if (studentProfile?.status === 'active') {
        setIsEnabled(true);
      }
    });
  }, [profileId]);

  return (
    <SafeAreaView style={styles.container}>
      {profileData && (
        <>
          <Header hasBack title="Profile" />
          <View style={styles.body}>
            <Spacer size={'xm'} />
            <View style={styles.avatar}>
              {profileData.picture && (
                <Image
                  style={styles.avatarImage}
                  source={{uri: `${profileData.picture}/100`}}
                />
              )}
            </View>
            {renderRow('First Name:', profileData.firstName)}
            {renderRow('Last Name:', profileData.lastName)}
            {renderRow('Roll Number:', profileData.rollNumber)}
            {renderRow('Class:', profileData.className)}
            <Spacer size={'xm'} />
            <View style={styles.enableProfile}>
              <Label text={'Enable/Disable'} color={'primary'} weight={'700'} />
              <Switch
                trackColor={{false: Colors.lightTextGrey, true: Colors.primary}}
                thumbColor={isEnabled ? Colors.lightGrey : Colors.lightGrey}
                onValueChange={enableProfile}
                value={isEnabled}
              />
            </View>
          </View>
          {profileData.status === 'active' && (
            <View style={styles.footer}>
              <Button
                text={`Chat to ${profileData.firstName}`}
                onPress={() =>
                  navigation.navigate('Chat', {
                    id: profileData.id,
                  })
                }
              />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default Profile;
