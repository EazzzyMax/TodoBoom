import { FC } from 'react';
import { LayoutAnimation, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../redux/todoSlice';
import { colors } from '../../StylesConstants/Colors';
import { layoutDeleteAnimConfig } from '../../utils/LayoutAnimation';
import { PlusIcon } from './PlusIcon';

interface addTodoBtnProps {
  openModal: () => void;
}

const AddTodoBtn: FC<addTodoBtnProps> = ({ openModal }) => {
  const dispatch = useDispatch();
  const createNewCategory = () => {
    console.log('try to add category');
    dispatch(addCategory());
    LayoutAnimation.configureNext(layoutDeleteAnimConfig);
  };

  return (
    <TouchableOpacity onLongPress={createNewCategory} onPress={openModal}>
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
