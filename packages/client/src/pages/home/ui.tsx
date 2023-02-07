import React, { useState } from 'react'
import { HomeHead } from './styles'
import { Button } from 'antd'
import { First } from '../first/ui'
import { DingtalkOutlined } from '@ant-design/icons'

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <HomeHead>
        Home
      </HomeHead>
      <Button size='large' icon={<DingtalkOutlined />} onClick={()=>setIsVisible(!isVisible)}>
        Forward
      </Button>
      {isVisible && <First/>}
    </>
  )
}
