import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CardHeader from './CardHeader';
import TodoList from './TodoList';

export default function Card() {
  return (
      <View style={s.container}>
        <CardHeader />
        <TodoList />
      </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#222',
    margin: 20,
    borderRadius: 15,
    overflow: 'hidden',
  },
});