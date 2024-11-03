import { View, Text } from 'react-native'
import React from 'react'
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated'

export default function PlaceListview(placeList: any) {
  console.log(placeList)
  return (
    <View>
      {/* <FlatList
      data={placeList}
      renderItem={({item,index})=>(
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
      /> */}
    </View>
  )
}