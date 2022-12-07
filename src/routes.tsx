import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ProfileList, ChatList, Profile, Chat} from './scenes';
import {Colors} from './common';

export type RootTabParamList = {
  ProfileList: undefined;
  ChatList: undefined;
};

export type RootStackParamsList = {
  Tab: RootTabParamList;
  Profile: {
    id: ProfileType['id'];
  };
  Chat: {
    id: ProfileType['id'];
  };
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const Stack = createStackNavigator<RootStackParamsList>();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.lightTextGrey,
        headerShown: false,
      })}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}: any) => (
            <Icon name="users" size={24} color={color} />
          ),
        }}
        name="Profiles"
        component={ProfileList}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color}: any) => (
            <Icon name="comments" size={24} color={color} />
          ),
        }}
        name="Chats"
        component={ChatList}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={TabBar} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default Routes;
