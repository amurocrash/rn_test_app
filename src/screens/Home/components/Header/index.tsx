import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { BaseFCProps } from '../../../../types'
import { getMainBackgroundColor, getMainPaddingHorizontal, getScreenWidth } from '../../../../utils/display'
import { paddingNarrow } from '../../../../assets/styles/dimens'

export const HeaderHeight = 40

const Header: FC<BaseFCProps> = () => {
  return (
    <View style={[ styles.root ]}>
      <View/>
      <View style={ styles.moreWrapper }>
        <Text>more</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 9999,
    width: getScreenWidth(),
    height: HeaderHeight,
    paddingHorizontal: getMainPaddingHorizontal(),
    backgroundColor: getMainBackgroundColor(),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  moreWrapper: {
    marginBottom: paddingNarrow
  }
})

export default Header