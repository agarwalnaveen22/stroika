/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {loadInitalData} from 'utils/filter';
import App from './App';
import {name as appName} from './app.json';

loadInitalData();

AppRegistry.registerComponent(appName, () => App);
