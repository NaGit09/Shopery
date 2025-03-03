import React from 'react'
import "../../styles/common/Tag.css";

const Tag = ({ value }) => {
  return (
    <div className="hoverTag" >
        {value}
    </div>
  )
}

export default Tag
