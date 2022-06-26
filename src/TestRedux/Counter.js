import GlobalStyle from '../utils/GlobalStyle';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './CounterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => dispatch(decrement())} style={s.button}>
        <Text style={s.btnText}>-</Text>
      </TouchableOpacity>
      <Text style={[GlobalStyle.PTMono, s.count]}>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())} style={s.button}>
        <Text style={s.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 35,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    height: 100,
    width: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    borderRadius: 15,
  },
  btnText: {
    color: '#fff',
    fontSize: 35,
  },
  count: {
    color: '#fff',
    fontSize: 54,
    marginHorizontal: 20,
    minWidth: 100,
    textAlign: 'center'
  },
});
