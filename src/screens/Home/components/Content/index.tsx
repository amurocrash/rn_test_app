import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native'
import React, { JSXElementConstructor, ReactElement } from 'react'
import SearchInput from '../SearchInput'
import CategoryCards from '../TypeCategoryCards'
import { getMainPaddingHorizontal } from '../../../../utils/display'
import { HeaderHeight } from '../Header'
import { paddingExtremeLarge, paddingNormal } from '../../../../assets/styles/dimens'

const data = [{
  key: 'search-input',
}, {
  key: 'category-data'
}, {
  key: 'my-list'
}]

const Content = () => {
  const renderItem = (info: ListRenderItemInfo<{ key: string }>): ReactElement<any, string | JSXElementConstructor<any>> | null => {
    const key = info.item.key

    if (key === 'search-input') {
      return <SearchInput style={{ marginTop: HeaderHeight + paddingNormal }} />

    } else if (key === 'category-data') {
      return <CategoryCards style={{ marginTop: paddingExtremeLarge }} />

    } else if (key === 'my-list') {

    }

    return <></>
  }

  return (
    <View style={ styles.root }>
      <FlatList
        data={ data }
        renderItem={ renderItem }
        />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: getMainPaddingHorizontal()
  }
})

export default Content