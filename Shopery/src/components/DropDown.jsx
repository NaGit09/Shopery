import React from 'react'
const DropDown = () => {
  return (
<div className="dropdown bg-transparent">
  <button className="btn btn-secondary bg-transparent text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    All Categories
  </button>
  <ul className="dropdown-menu dropdown-menu-dark">
    <li><a className="dropdown-item active" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
  )
}

export default DropDown