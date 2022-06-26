import { StyleSheet } from 'react-native';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';
import { PTMono_400Regular } from '@expo-google-fonts/pt-mono';

import AppLoading from 'expo-app-loading';
import TestPage from './src/TestRedux/TestPage';
import { Main } from "./src/Pages/Main";

import { store } from './src/TestRedux/store';
import { Provider } from 'react-redux';

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
      <Main/>
  );
}

const s = StyleSheet.create({});
