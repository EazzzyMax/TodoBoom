import { useEffect, useState } from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentCard } from '../../redux/todoSlice';
import Card from './Card/Card';

export default function CardList() {
  const dispatch = useDispatch();

  const width = Dimensions.get('window').width - 30;
  const [canmomentum, setCanMomentum] = useState(false);
  function onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    let contentOffset = e.nativeEvent.contentOffset;
    let pageNum = Math.round(contentOffset.x / width);
    console.log('scrolled to card -', pageNum);
    dispatch(changeCurrentCard({ cardId: data[pageNum].id }));
  }

  const cards = useSelector((state) => state.cards.cards);
  const data = cards.filter((item) => {
    return !item.archived;
  });
  const renderItem = ({ item }) => <Card card={item} />;
  const cardSeparator = () => <View style={{ width: 10 }} />;

  return (
    <View style={s.contanier}>
      <FlatList
        horizontal={true}
        snapToInterval={width}
        decelerationRate={0.78}
        disableIntervalMomentum={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.ccStyle}
        data={data}
        renderItem={renderItem}
        onScroll={() => setCanMomentum(true)}
        onMomentumScrollEnd={(e) => {
          if (canmomentum) onScrollEnd(e);
          setCanMomentum(false);
        }}
        ItemSeparatorComponent={cardSeparator}
      />
    </View>
  );
}

const s = StyleSheet.create({
  contanier: {
    flex: 1,
  },
  ccStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
