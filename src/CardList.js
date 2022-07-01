import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import Card from './Card/Card';

export default function CardList() {
  const width = Dimensions.get('window').width - 30;
  return (
    <View style={s.contanier}>
      <ScrollView
        horizontal={true}
        snapToInterval={width}
        decelerationRate={0.78}
        disableIntervalMomentum={true}
        showsHorizontalScrollIndicator={false}
        endFillColor='rgba(35,35,35,0.2)'
        contentContainerStyle={s.ccStyle}
      >
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  ccStyle: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },

  square: {
    width: '100%',
    height: 100,
    backgroundColor: 'tomato',
    marginVertical: 10,
    borderWidth: 5,
    borderColor: '#555',
  },
});
