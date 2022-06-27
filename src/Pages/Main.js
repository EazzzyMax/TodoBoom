import {  SafeAreaView, StyleSheet, View } from 'react-native';
import Card from '../Card/Card';
import Navbar from '../Navbar/Navbar';

export default function Main() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <View style={s.container}>
        <Card />
        <Navbar />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: '#222',
  },
  container: {
    backgroundColor: '#111',
    flexGrow: 1,
  },
});
