import { Dimensions } from 'react-native'
import { borderRadiusNoraml, paddingLarge, paddingNormalX, paddingNormalXX } from '../assets/styles/dimens'
import { color_ligth_gray_extreme_x } from '../assets/styles/colors'

export function getScreenWidth() {
  return Dimensions.get('window').width
}

export function getScreenHeight() {
  return Dimensions.get('window').height
}

export function getMainPaddingHorizontal() {
  return paddingLarge
}

export function getMainPaddingVertical() {
  return paddingLarge
}

export function getMainBackgroundColor() {
  return color_ligth_gray_extreme_x
}

export function getMainBorderRadius() {
  return borderRadiusNoraml
}

export function getCardPaddingHorizontal() {
  return paddingNormalXX
}

export function getCardPaddingVertical() {
  return paddingNormalX
}

/**
 * 
 * 0 | 1  = 2 + 1 = 3
 * 
 * 0 | 1 | 2 = 3 + 2 = 5
 * 
 * 0 | 1 | 2 | 3 = 4 + 3 = 7
 * 
 * cols = cols + cols - 1
 */
export function getRealColumnsForSeparator(colomns: number) {
  return colomns + (colomns - 1) // 2 => 3, 
}