import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  View,
} from 'react-native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamsList} from 'routes';
import {Header, ProfileCard, SearchBox} from 'components/molecules';
import {Separator, Spacer} from 'components/atoms';

import styles from './style';
import {getProfiles, searchStudent} from 'utils/filter';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamsList>;
};

const ChatList = ({navigation}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [studentsData, setStudentsData] = useState<Array<ProfileType>>([]);
  const [searchedStudentsData, setSearchedStudentsData] = useState<
    Array<ProfileType>
  >([]);
  const [page, setPage] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>('');
  const renderCards: ListRenderItem<ProfileType> = useCallback(
    ({item}) => {
      const lastMessage =
        item.chats.length > 0 ? item.chats[item.chats.length - 1].message : '';
      return (
        <ProfileCard
          id={item.id}
          firstName={item.firstName}
          lastName={item.lastName}
          className={item.className}
          rollNumber={item.rollNumber}
          picture={item.picture}
          status={item.status}
          lastMessage={lastMessage}
          source={'chat'}
          onPress={() =>
            navigation.navigate('Chat', {
              id: item.id,
            })
          }
        />
      );
    },
    [navigation],
  );

  const itemSeparator = useCallback(() => {
    return (
      <>
        <Spacer size={'xm'} />
        <Separator />
        <Spacer size={'xm'} />
      </>
    );
  }, []);

  const searchStudentData = useCallback(
    (text: string) => {
      setSearchText(text);
      const searchedData = searchStudent(text, studentsData);
      setSearchedStudentsData(searchedData);
    },
    [studentsData],
  );

  const reload = useCallback(() => {
    if (page > 0) {
      setPage(0);
    } else {
      getProfiles(0, true).then(data => {
        if (data.length > 0) {
          setStudentsData(data);
        }
      });
    }
  }, [page]);

  const refreshHandler = useCallback(() => {
    setRefreshing(true);
    reload();
    setRefreshing(false);
  }, [reload]);

  useEffect(() => {
    if (page == 0) {
      getProfiles(page, true).then(data => {
        if (data.length > 0) {
          setStudentsData(data);
        }
      });
    } else {
      getProfiles(page, true).then(data => {
        if (data.length > 0) {
          setStudentsData((previousData: Array<ProfileType>) => [
            ...previousData,
            ...data,
          ]);
        }
      });
    }
  }, [page]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Student Chats" />
      <View style={styles.body}>
        <Spacer size={'xm'} />
        <SearchBox
          placeholder="Type here to search..."
          value={searchText}
          onChangeText={searchStudentData}
        />
        <Spacer size={'xm'} />
        <FlatList
          data={
            searchedStudentsData.length > 0
              ? searchedStudentsData
              : studentsData
          }
          renderItem={renderCards}
          ItemSeparatorComponent={itemSeparator}
          keyExtractor={data => data.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refreshHandler}
            />
          }
          onEndReached={() => setPage(page + 1)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatList;
