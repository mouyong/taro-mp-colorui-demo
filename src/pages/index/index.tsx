import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { ClButton } from "mp-colorui"


import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <ClButton shape='round' bgColor='red' long>red</ClButton>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
