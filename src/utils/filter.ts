import fs from 'react-native-fs';
import {orderBy} from 'lodash';
import DATA from './profiles.json';

export const loadInitalData = () => {
  const profileJson = fs.DocumentDirectoryPath + '/profile.json';
  fs.writeFile(profileJson, JSON.stringify(DATA), 'utf8')
    .then(() => {
      console.log('FILE WRITTEN!');
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const filterStudent = (id: number, profilesData: Array<ProfileType>) => {
  const data = profilesData.find(profiles => profiles.id === id);
  return data;
};

export const searchStudent = (
  text: string,
  profilesData: Array<ProfileType>,
) => {
  const data = profilesData.filter(
    profiles =>
      profiles.firstName.toLowerCase().includes(text.toLowerCase()) ||
      profiles.lastName.toLowerCase().includes(text.toLowerCase()),
  );
  return data;
};

export const updateStudentStatus = (
  id: number,
  status: boolean,
  profilesData: Array<ProfileType>,
) => {
  const objIndex = profilesData.findIndex(profiles => profiles.id === id);
  profilesData[objIndex].status = status ? 'active' : 'inactive';
  const profileJson = fs.DocumentDirectoryPath + '/profile.json';

  fs.writeFile(profileJson, JSON.stringify(profilesData), 'utf8')
    .then(() => {
      console.log('FILE WRITTEN!');
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const getProfiles = (page?: number, isChatOnly?: boolean) => {
  const profileJson = fs.DocumentDirectoryPath + '/profile.json';
  if (page !== undefined && page >= 0) {
    const split = 20;
    const limit = split * (page + 1);
    const offset = page * split;
    return fs
      .readFile(profileJson, 'utf8')
      .then(data => {
        let DATA = JSON.parse(data);
        if (isChatOnly) {
          DATA = DATA.filter(
            (profiles: ProfileType) => profiles.chats.length > 0,
          );
          DATA = orderBy(
            DATA,
            [c => c.chats[c.chats.length - 1].date, 'firstname'],
            ['desc', 'asc'],
          );
        }
        const currentDATA = DATA.slice(offset, limit);
        return currentDATA;
      })
      .catch(() => []);
  } else {
    return fs
      .readFile(profileJson, 'utf8')
      .then(data => {
        return JSON.parse(data);
      })
      .catch(() => []);
  }
};

export const addStudentChat = (
  id: number,
  messageObj: MessageType,
  profilesData: Array<ProfileType>,
) => {
  const objIndex = profilesData.findIndex(profiles => profiles.id === id);
  profilesData[objIndex].chats.push(messageObj);
  const profileJson = fs.DocumentDirectoryPath + '/profile.json';

  return fs
    .writeFile(profileJson, JSON.stringify(profilesData), 'utf8')
    .then(() => {
      console.log('FILE WRITTEN!');
      return true;
    })
    .catch(err => {
      console.log(err.message);
      return false;
    });
};
