import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import CardList from '../CardList/CardList';
import Navbar from '../Navbar/Navbar';

export default function Main() {
  return (
    <SafeAreaView style={s.safeArea}>
      <View style={s.container}>
        <CardList />
        <Navbar />
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
  }
});
