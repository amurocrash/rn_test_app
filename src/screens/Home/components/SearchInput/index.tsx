import { StyleSheet, TextInput, View } from 'react-native'
import React, { FC } from 'react'
import { color_ligth_gray_extreme } from '../../../../assets/styles/colors'
import { paddingNormal } from '../../../../assets/styles/dimens'
import { getMainBorderRadius } from '../../../../utils/display'
import { BaseFCProps } from '../../../../types'

const SearchInput: FC<BaseFCProps> = ({ style }) => {
  return (
    <View style={ [styles.inputWrapper, style] }>
      <TextInput style={ styles.input } placeholder='search'/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    
  },
  input: {
    backgroundColor: color_ligth_gray_extreme,
    paddingVertical: paddingNormal,
    paddingHorizontal: paddingNormal,
    borderRadius: getMainBorderRadius(),
  }
})

export default SearchInput