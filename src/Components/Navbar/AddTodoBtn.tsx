import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors, Colors } from '../../StylesConstants/Colors';
import { PlusIcon } from './PlusIcon';

interface addTodoBtnProps {
  openModal: () => void;
}

const AddTodoBtn: FC<addTodoBtnProps> = ({ openModal }) => {
  return (
    <TouchableOpacity onPress={openModal}>
      <View style={s.button}>
        <PlusIcon />
      </View>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.buttonActive,
    width: 80,
    height: 46,
    borderRadius: 15,
  },
});

export default AddTodoBtn;
