import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getMainBackgroundColor, getMainPaddingHorizontal, getScreenWidth } from '../../utils/display'
import { paddingNarrow } from '../../assets/styles/dimens'

export const FOOTER_HEIGHT = 40

const Footer = () => {
  return (
    <View style={ styles.root }>
      <View style={ styles.contentWrapper }>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    height: FOOTER_HEIGHT,
    width: getScreenWidth(),
    paddingHorizontal: getMainPaddingHorizontal(),
    alignItems: 'flex-start',
    backgroundColor: getMainBackgroundColor(),
  },
  contentWrapper: {
    marginTop: paddingNarrow,
  }
})

export default Footer