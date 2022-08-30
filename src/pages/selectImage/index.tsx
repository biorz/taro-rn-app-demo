import { Component } from 'react'
import { View, Text, Button, Input, Textarea } from '@tarojs/components'
import Taro, { chooseImage } from '@tarojs/taro'
import styles from './index.module.scss'

export default class Index extends Component {
  state = {
    res: ''
  }

  componentDidMount () {
    Taro.getStorage({ key: 'chooseImage' }).then(res => {
      console.log('getStorage', res)
      this.setState({
        res: JSON.stringify(res.data, null, 2)
      })
    })
  }

  onSelectImage = () => {
    chooseImage({ count: 1 }).then(res => {
      console.log('chooseImage', res)

      // this.setState({
      //   res: JSON.stringify(res, null, 2)
      // })

      Taro.setStorage({
        key: 'chooseImage',
        data: res
      })
    })
  }

  render () {
    const { res } = this.state
    return (
      <View className={styles.container}>
        <Button onClick={this.onSelectImage}>选择图片</Button>

        <Textarea value={res} maxlength={10000} />
      </View>
    )
  }
}
