import { StyleSheet, Text, View } from 'react-native'

export default function CardHeader({categoryName}) {
  return (
    <View style={s.container}>
      <Text style={s.name}>{categoryName}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    color: '#fff',
    paddingLeft: 20,
    fontFamily:  'Montserrat_600SemiBold'
  }

})