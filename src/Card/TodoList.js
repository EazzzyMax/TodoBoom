import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import TodoItem from './TodoItem';

const DATA = [];
for (let i = 1; i <= 30; i++) {
  DATA.push({ id: i.toString(), title: `item ${i}` });
}

export default function TodoList() {
  const renderItem = ({ item }) => <TodoItem title={item.title} />;

  return (
    <View style={s.container}>
      <FlatList
        style={s.scrollView}
        contentContainerStyle={s.ccStyle}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const s = StyleSheet.create({
  scrollView: {
    flex: 1,
    // borderWidth: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderColor: '#50caff',
  },
  ccStyle: {
    padding: 20,
  },
  container: {
    // borderWidth: 1,
    // borderColor: '#84f',
    flex: 1,
  },
});
