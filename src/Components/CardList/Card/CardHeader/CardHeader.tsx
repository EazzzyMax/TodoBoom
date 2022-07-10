import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../StylesConstants/Colors';

interface cardHeaderProps {
  categoryName: string;
}

const CardHeader: FC<cardHeaderProps> = ({ categoryName }) => {
  return (
    <View style={s.container}>
      <Text style={s.name}>{categoryName}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: colors.cardHeader,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 20,
    fontFamily: 'Montserrat_600SemiBold',
  },
});

export default CardHeader;
