import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

export default function CardList() {
  return (
    <View style={s.container}>
        <Card />
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
