import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card/Card';
import AppLoading from 'expo-app-loading';
import {useFonts, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat'
import Navbar from './src/Navbar/Navbar';
import CardList from './src/CardList';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <View style={s.container}>
      <View style={s.header}></View>
      <Card/>
      <Navbar/>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    backgroundColor: '#222',
    height: 70,
  },
  footer: {
    backgroundColor: '#222',
    height: 54,
  },
  item: {
    backgroundColor: '#555',
    height: 100,
    marginBottom: 10,
  },
});
