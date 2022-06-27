import { StyleSheet } from 'react-native';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';
import { PTMono_400Regular } from '@expo-google-fonts/pt-mono';

import AppLoading from 'expo-app-loading';
import Main from './src/Pages/Main';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

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
      <Main />
    </Provider>
  );
}

const s = StyleSheet.create({});
