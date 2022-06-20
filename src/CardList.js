import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './Card/Card';

export default function CardList() {
  return (
    <View style={s.container}>
      {/* <ScrollView contentContainerStyle={s.scrollView}> */}
        <Card />
      {/* </ScrollView> */}
    </View>
  );
}

const s = StyleSheet.create({
  scrollView: {
    padding: 20,
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    flex: 1,
  },
});
