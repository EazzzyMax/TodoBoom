import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Raleway_400Regular, Raleway_500Medium } from '@expo-google-fonts/raleway';
import Main from './src/Pages/Main';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Raleway_400Regular,
    Raleway_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Main />;
}

const s = StyleSheet.create({});
