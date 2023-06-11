import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'

// // const App: FC = () => {
// //   const onAppLayout = (e: LayoutChangeEvent) => {
// //     console.log('app height: ', e.nativeEvent.layout.height)
// //   }

// //   return (
// //     <SafeAreaView 
// //       style={ [globalStyles.matchParent, styles.App] } 
// //       onLayout={ onAppLayout }
// //       >
// //       <Index/>
// //     </SafeAreaView>
// //   )
// // }

// // const styles = StyleSheet.create({
// //   App: {
// //     backgroundColor: color_white
// //   },
// // })

// const HomeScreen: FC<DxNavigationView> = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title='go to details'
//         onPress={ () => navigation.navigate('Details') }
//         />
//     </View>
//   )
// }

// const DetailsScreen: FC<DxNavigationView> = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Button
//         title='go to my'
//         onPress={ () => navigation.navigate('MyScreen') }
//         />
//     </View>
//   )
// }

// const MyScreen: FC<DxNavigationView> = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>My Screen</Text>
//       <Button
//         title="go to my ...again"
//         onPress={() => navigation.push('MyScreen')}
//       />
//     </View>
//   )
// }

// const Stack = createNativeStackNavigator()

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen 
//           name='Home' 
//           component={ HomeScreen } 
//           options={{ title: 'Overview' }}
//           />
//         {/* <Stack.Screen name='Home'>
//           {
//             (props) => <HomeScreen { ...props } />
//           }
//         </Stack.Screen> */}
//         <Stack.Screen 
//           name="Details" 
//           component={ DetailsScreen } 
//           />
//         <Stack.Screen
//           name='MyScreen'
//           component={ MyScreen }
//           />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App

const Stack = createNativeStackNavigator()

const makeStack = (fc: FC, name?: string, options?: any) => {
  return (
    <Stack.Screen name={ name ? name : fc.name } component={ fc } options={ options }/>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        { makeStack(HomeScreen, 'Home', { headerShown: false }) }
        { makeStack(ProfileScreen, 'Profile') }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
