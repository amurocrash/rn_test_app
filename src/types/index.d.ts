import { FlexStyle, ImageStyle, TextStyle, ViewStyle } from 'react-native/types'
import { RouteProp } from '@react-navigation/core'
import { PropsWithChildren } from 'react'

export {}

export type BaseFCProps = PropsWithChildren<{
  style?: ViewStyle
}>

export interface Reminder {
  id: string
  category: ReminderCategory
  title: string
  time: Date
  flag: boolean
  note?: string
  typeCategory: TypeCategory
}

export interface TypeCategory {
  id: string
  name: string
}

export interface TypeCategoryData {
  id: string
  category: TypeCategory
  data: Reminder[]
  count: number
}

export interface ReminderCategory {
  id: string
  name: string
}

export interface ReminderCategoryData {
  id: string
  category: ReminderCategory
  data: Reminder[]
  count: number
}