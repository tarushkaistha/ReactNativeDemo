/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import ReactMoE from 'react-native-moengage';
import { MoEProperties, MoEAppStatus, MoEInitConfig, MoEPushConfig, MoEngageLogConfig, MoEngageLogLevel } from "react-native-moengage";


function App(): React.JSX.Element {

    useEffect(() => {
      // Get your App Id from the MoEngage Dashboard
      const APP_ID = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

      // Optionally pass configuration for the React-Native Plugins
      const moEInitConfig = new MoEInitConfig(
        MoEPushConfig.defaultConfig(),
        new MoEngageLogConfig(MoEngageLogLevel.VERBOSE, true)
      );

      /**
       * Initialize the MoEngage Core SDK whenever the component is mounted properly.
       *
       * Notes:
       *  1. If you have class based component then do consider initializing the MoEngage SDK in the render() or componentDidMount() function of class component.
       *  2. You can also initialize the MoEngage SDK without moEInitConfig i.e. `ReactMoE.initialize(APP_ID)`;
       */

      ReactMoE.initialize(APP_ID, moEInitConfig);
      ReactMoE.requestPushPermissionAndroid();



    },[]);



return (
<SafeAreaView style={styles.container}>

    <View>

          <Button
            title="welcome to rn demo"

          />
        </View>



</SafeAreaView>
  );


};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,

  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;

