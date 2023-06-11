import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BaseScreen from '../BaseScreen'

const ProfileScreen = () => {
  return (
    <BaseScreen>
      <View style={ styles.root }>
        <Text>ProfileScreen</Text>
      </View>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ProfileScreen