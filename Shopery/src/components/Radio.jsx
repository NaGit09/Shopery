import React, { useState } from 'react'
import "../styles/Radio.css"
const Radio = () => {
    const [checked , setChecked] = useState(false);
  return (
    <label className="custom-Radiobox">
    <input
      type="radio"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
    <span className="RadioMark"></span>
  </label>

  )
}

export default Radio