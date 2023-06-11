import { NativeModules, FlatList, ListRenderItemInfo, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { paddingLarge } from '../../../../assets/styles/dimens'
import { color_ligth_gray, color_ligth_gray_extreme_xx, color_main_black } from '../../../../assets/styles/colors'
import { BaseFCProps, TypeCategoryData } from '../../../../types'
import { getCardPaddingHorizontal, getCardPaddingVertical, getMainBorderRadius, getMainPaddingHorizontal, getScreenWidth } from '../../../../utils/display'

const data: TypeCategoryData[] = [{
  id: '1',
  category: {
    id: '1',
    name: 'Today'
  },
  data: [],
  count: 2
}, {
  id: '2',
  category: {
    id: '2',
    name: 'Scheduled'
  },
  data: [],
  count: 2
}, {
  id: '3',
  category: {
    id: '3',
    name: 'All'
  },
  data: [],
  count: 2
}, {
  id: '4',
  category: {
    id: '4',
    name: 'Flagged'
  },
  data: [],
  count: 1
}, {
  id: '5',
  category: {
    id: '5',
    name: 'Completed'
  },
  data: [],
  count: 0
}]

const numColumns = 2
const VerticalSeparatorWidth = paddingLarge
const marginForVerticalSeparator = VerticalSeparatorWidth / 2
const ListItemWidth = (getScreenWidth() - getMainPaddingHorizontal() * 2) / 2
const ListItemHeight = 80
const HorizontalSeparatorWidth = paddingLarge

const CategoryCards: FC<BaseFCProps> = ({ style }) => {

  const renderItem = (item: ListRenderItemInfo<TypeCategoryData>) => {
    const { item: categoryData, index } = item
    let marginStyle: StyleProp<ViewStyle> | null = null
    if (index % 2 === 0) {
      marginStyle = { marginRight: marginForVerticalSeparator }
    } else {
      marginStyle = { marginLeft: marginForVerticalSeparator } 
    }

    const onItemPress = () => {
      console.log(categoryData.category.name)
      NativeModules.ThreadModule.test('name', 'location')
    }

    return (
      <View style={ [styles.listItemWrapper] }>
        <TouchableOpacity onPress={ onItemPress }>
          <View style={ [styles.listItemWrapperInner, marginStyle] } >
            <Text style={ styles.textTitle }>{ categoryData.category.name }</Text>
            <Text style={ styles.textCount }>{ categoryData.count }</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const renderHorizontalSeparator = () => {
    return (
      <View style={{height: HorizontalSeparatorWidth, backgroundColor: 'transparent' }}/>
    )
  }

  const getItemLayout = (
    _data: TypeCategoryData[] | null | undefined, 
    index: number
    ): { length: number; offset: number; index: number } => {
    return {
      length: ListItemHeight + HorizontalSeparatorWidth,
      offset: (ListItemHeight + HorizontalSeparatorWidth) * Math.floor(index / 2),
      index,
    }
  }

  return (
    <View style={[style]}>
      <FlatList
        style={ styles.list }
        data={ data }
        renderItem={ (item) => renderItem(item) }
        keyExtractor={ item => item.id }
        numColumns={ numColumns }
        ItemSeparatorComponent={ renderHorizontalSeparator }
        getItemLayout={ getItemLayout }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
  },
  listItemWrapper: {
    width: ListItemWidth,
    height: ListItemHeight,
  },
  listItemWrapperInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: ListItemHeight,
    backgroundColor: color_ligth_gray_extreme_xx,
    paddingHorizontal: getCardPaddingHorizontal(),
    paddingVertical: getCardPaddingVertical(),
    borderRadius: getMainBorderRadius(),
  },
  textTitle: {
    color: color_ligth_gray,
  },
  textCount: {
    color: color_main_black,
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default CategoryCards