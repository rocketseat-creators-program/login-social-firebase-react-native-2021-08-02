import React from 'react';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Settings} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

import Routes from './routes';

const App = () => {
  Settings.initializeSDK();
  GoogleSignin.configure();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Routes />
      </ApplicationProvider>
    </>
  );
};

export default App;
