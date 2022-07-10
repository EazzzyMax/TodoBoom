import { useEffect, useRef, useState } from 'react';
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

  //all cards
  const cards = useSelector((state) => state.cards.cards);
  // non-archived cards
  const data = cards.filter((item) => {
    return !item.archived;
  });
  const renderItem = ({ item }) => (
    <Card changeCurrentCardId={() => changeCurrentCardId(currentPage + 1)} card={item} />
  );

  const [currentPage, setCurrentPage] = useState(0);
  const pageRef = useRef(0);


  const widthOfScroll = Dimensions.get('window').width - 30;
  const [canmomentum, setCanMomentum] = useState(false);

  const changeCurrentCardId = (pageNum) => {
    console.log('cCCI', pageNum);
    dispatch(changeCurrentCard({ cardId: data[pageNum].id }));
  };

  function onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    let contentOffsetX = e.nativeEvent.contentOffset.x;
    let pageNum = Math.round(contentOffsetX / widthOfScroll);
    setCurrentPage(pageNum);
    console.log('-----------------------');
    console.log('scrolled to page/card -', pageNum);
    changeCurrentCardId(pageNum);
  }

  return (
    <View style={s.contanier}>
      <FlatList
        horizontal={true}
        snapToInterval={widthOfScroll}
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
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
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
