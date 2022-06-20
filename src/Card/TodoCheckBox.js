import { StyleSheet, Text, View } from 'react-native'

export default function TodoCheckBox() {
  return (
    <View style={s.checkbox} >
    </View>
  )
}

const s = StyleSheet.create({
  checkbox: {
    marginRight: 14,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderColor: '#888',
    borderWidth: 1,
  }
})