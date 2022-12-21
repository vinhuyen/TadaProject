import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import FriendList from './src/screens/FriendsList';

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//
//   return (
//     <View style={styles.container}>
//       <Switch
//         trackColor={{false: 'pink', true: 'blue'}}
//         thumbColor={isEnabled ? 'red' : 'green'}
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//     </View>
//   );
// };
//
// const STYLES = ['default', 'dark-content', 'light-content'];
// const TRANSITIONS = ['fade', 'slide', 'none'];
//
// const App = () => {
//   const [hidden, setHidden] = useState(false);
//   const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
//   const [statusBarTransaction, setStatusBarTransaction] = useState(
//     TRANSITIONS[0],
//   );
//
//   const changeStatusBarVisibility = () => setHidden(!hidden);
//   return (
//     <SafeAreaView>
//       <StatusBar animated={true} backgroundColor="pink" hidden={hidden} />
//       <Text>Dzinh Yenn</Text>
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

const App = () => {
  return (
    <SafeAreaView>
      <FriendList />
    </SafeAreaView>
  );
};

export default App;
