import { StyleSheet, View } from 'react-native'
import React, { FC } from 'react'
import BaseScreen from '../BaseScreen'
import Header from './components/Header'
import Footer from '../../components/Footer'
import Content from './components/Content'

const HomeScreen: FC = () => {
  return (
    <BaseScreen >
      <View style={ styles.root }>
        <Header/>
        <Content/>
        <Footer/>
      </View>
    </BaseScreen>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
})

export default HomeScreen