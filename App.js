import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';
import { PTMono_400Regular } from '@expo-google-fonts/pt-mono';

import AppLoading from 'expo-app-loading';
import Main from './src/Screens/Main';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import TextPage from './src/Screens/TextPage';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Raleway_400Regular,
    Raleway_500Medium,
    PTMono_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <View style={s.container}>
        <StatusBar hidden={false} translucent={true} backgroundColor='rgba(17, 17, 17, 0.5)' />
        <Main />
      </View>
    </Provider>
  );
}

const paddingTop = StatusBar.currentHeight;
const s = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(17, 17, 17, 0.6)',
  },
});
