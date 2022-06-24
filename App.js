import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';
import Main from './src/Pages/Main';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import TestPage from './src/TestRedux/TestPage';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Raleway_400Regular,
    Raleway_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <TestPage/>
    </Provider>
  );
}

const s = StyleSheet.create({});
