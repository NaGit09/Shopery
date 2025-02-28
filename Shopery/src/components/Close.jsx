import React from 'react'
import "../styles/Close.css";
import {CloseOutlined} from "@ant-design/icons"
const Close = () => {
  return (
    <button className='btn_close absolute_center'>
<CloseOutlined/>
    </button>
  )
}

export default Close