import { StyleSheet } from 'react-native'
import { color_main_black } from './colors'
import { match_parent_height, match_parent_width, paddingNormalXX } from './dimens'

export const globalStyles = StyleSheet.create({
  matchParent: {
    width: match_parent_width,
    height: match_parent_height,
  },
  basePadding: {
    paddingLeft: paddingNormalXX,
    paddingRight: paddingNormalXX,
  },
  baseText: {
    color: color_main_black
  }
})