import { StyleSheet } from 'react-native'
import React, { FC } from 'react'
import { BaseFCProps } from '../types'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getMainBackgroundColor } from '../utils/display'

const BaseScreen: FC<BaseFCProps> = ({ children } ) => {

  return (
    <SafeAreaView style={ styles.root }>
      {
        children
      }
    </SafeAreaView>
  )
}

export default BaseScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: getMainBackgroundColor(),
  },
})