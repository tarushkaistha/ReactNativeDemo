/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Button,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import ReactMoE, {MoESelfHandledCampaignData} from 'react-native-moengage';
import ReactMoEngageCards from "react-native-moengage-cards";
import { CardsData } from "react-native-moengage-cards";
import MoEReactInbox, {MoEInboxData} from 'react-native-moengage-inbox';
import { MoEngageLogger } from "react-native-moengage";
import { MoEProperties, MoEAppStatus, MoEInitConfig, MoEPushConfig, MoEngageLogConfig, MoEngageLogLevel } from "react-native-moengage";


function App(): React.JSX.Element {

    const [state, setState] = useState(0)

    const fetchCardsData = useCallback(async()=> {
             const cardsData = await ReactMoEngageCards.fetchCards();
             MoEngageLogger.debug(`cards is fetched`);
             setState(cardsData)
    }, [])


        const fetchUnClickedCardsCount = useCallback(async()=> {
                 const unClickedCardsCount = await ReactMoEngageCards.getUnClickedCardsCount();
                 MoEngageLogger.debug(`un-clicked cards count`);
                 setState(unClickedCardsCount)
        }, [])

    useEffect(() => {
      // Get your App Id from the MoEngage Dashboard
      const APP_ID = "Z1UDNSWJALFR3UTPWWMCSF5Z";

      // Optionally pass configuration for the React-Native Plugins
      const moEInitConfig = new MoEInitConfig(
        MoEPushConfig.defaultConfig(),
        new MoEngageLogConfig(MoEngageLogLevel.VERBOSE, true)
      );


      ReactMoE.initialize(APP_ID, moEInitConfig);
      ReactMoE.requestPushPermissionAndroid();
       ReactMoEngageCards.initialize(APP_ID);

       ReactMoEngageCards.cardDelivered();

    },[]);



return (
<SafeAreaView style={styles.container}>

             <View>
             <Text style={styles.title}>
               Self Handled Cards Tutorial
             </Text>

             <Button
               title="Click to Fetch Self Handled cards data"
               onPress={() => fetchCardsData()  }
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



// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
//
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;
//
// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }
//
// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//
//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
//
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
//
// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });
//
//
// export default App;
