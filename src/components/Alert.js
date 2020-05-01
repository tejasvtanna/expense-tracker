import React from 'react'

const Alert = ({ alert }) => {
   return <div className={`alert alert-${alert.type}`}>{alert.text}</div>
}

export default Alert
