import { StyleSheet, Text, View } from 'react-native'
import { CreateIcon } from "./Icons/CreateIcon.jsx";

export default function CreateTodoSettings() {
  return (
    <View style={s.container}>
      <CreateIcon/>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    justifyContent:'flex-end'
  },
})