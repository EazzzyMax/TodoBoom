import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import CardList from '../Components/CardList/CardList';
import Navbar from '../Components/Navbar/Navbar';

export default function Main() {
  const [debugString, setDebugString] = useState('');

  return (
    <SafeAreaView style={s.safeArea}>
      <View style={s.container}>
        <CardList setDebugString={setDebugString} />
        <Navbar debugString={debugString} />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safeArea: {
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    backgroundColor: '#111',
    flex: 1,
  },
});
