/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3A606E',
      secondary: 'yellow',
    },
  };

export default function Main() {
    return (
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);
