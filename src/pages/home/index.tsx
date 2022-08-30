import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View style={{flex: 1, backgroundColor: 'green'}}>
          <Text onClick={() => Taro.hideTabBar()}>hideTabBar</Text>
          <View></View>
          <Text onClick={() => Taro.showTabBar()}>showTabBar</Text>
        </View>
        <View style={{height: 50, backgroundColor: 'pink'}}></View>
      </View>
    )
  }
}
