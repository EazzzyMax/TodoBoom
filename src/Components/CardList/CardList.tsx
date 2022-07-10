import {
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  LayoutAnimation,
} from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { archiveCurrentCard, changeCurrentCard } from '../../redux/todoSlice';
import Card from './Card/Card';
import { ICard } from '../../types/types';
import { log } from 'react-native-reanimated';
import { layoutDeleteAnimConfig } from '../../utils/LayoutAnimation';

export default function CardList() {
  const dispatch = useDispatch();
  const pageRef = useRef(0);
  const flatRef = useRef<FlatList<any>>();

  const cards = useSelector((state) => state.cards.cards); //all cards
  const cardsData: ICard[] = cards.filter((item) => !item.archived); // non-archived cards

  console.log('----------------- render CardList');

  const widthOfScroll = Dimensions.get('window').width - 30;
  const canMomentumRef = useRef(false);

  const changeCurrentCardId: (pageNum: number) => void = (pageNum) => {
    //
    dispatch(changeCurrentCard({ cardId: cardsData[pageNum].id }));
  };

  const archiveCard: () => void = () => {
    console.log('--------archive Card!!!', pageRef.current);
    dispatch(archiveCurrentCard());
    if (cardsData.length > 1) {
      if (pageRef.current === cardsData.length - 1) {
        console.log('last card...');
        pageRef.current -= 1;
        changeCurrentCardId(pageRef.current);
        flatRef.current.scrollToOffset({ offset: pageRef.current * widthOfScroll });
      } else {
        changeCurrentCardId(pageRef.current + 1);
      }
    }
    LayoutAnimation.configureNext(layoutDeleteAnimConfig);
  };

  function onScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    let contentOffsetX = e.nativeEvent.contentOffset.x;
    pageRef.current = Math.round(contentOffsetX / widthOfScroll);
    console.log('--------scrolled to page/card -', pageRef.current);
    changeCurrentCardId(pageRef.current);
  }

  const renderItem = ({ item }) => <Card archiveCard={archiveCard} card={item} />;
  return (
    <View style={s.contanier}>
      <FlatList
        ref={flatRef}
        horizontal={true}
        snapToInterval={widthOfScroll}
        decelerationRate={0.78}
        disableIntervalMomentum={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.ccStyle}
        data={cardsData}
        renderItem={renderItem}
        onScroll={() => (canMomentumRef.current = true)}
        onMomentumScrollEnd={(e) => {
          if (canMomentumRef.current) onScrollEnd(e);
          canMomentumRef.current = false;
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
