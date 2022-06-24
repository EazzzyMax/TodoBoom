import { StyleSheet, Text, View } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import Counter from './Counter';

export default function TestPage() {
  return (
    <View style={s.container}>
      <Text style={[GlobalStyle.Montserrat600Font, s.pageName]}>Counter</Text>
      <Counter/>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#111',
    flexGrow: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  pageName: {
    fontSize: 34,
    color: '#fff',
  },
});
