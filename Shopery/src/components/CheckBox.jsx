import React, { useState } from 'react'
import "../styles/CheckBox.css"
const CheckBox = () => {
    const [checked , setChecked] = useState(false)
  return (
    <label className="custom-checkbox">
    <input
      type="checkbox"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
    <span className="checkmark"></span>
  </label>
  )
}

export default CheckBox