import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { BaseFCProps } from '../types'

const BaseHeader: FC<BaseFCProps> = () => {
  return (
    <View style={[ styles.root ]}>
      <Text>BaseHeader</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    height: 40
  }
})

export default BaseHeader