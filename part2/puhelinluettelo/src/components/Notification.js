import React from "react"

const Notification = ({ message, success }) => {
    if (message === null) {
      return null
    }
    let style = {}
    if (success) {
        style = {
            color: 'green',
            background: "lightgrey",
            fontSize: 20,
            borderStyle: "solid",
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
    }else {
        style = {
            color: 'red',
            background: "lightgrey",
            fontSize: 20,
            borderStyle: "solid",
            borderRadius: 5,
            padding: 10,
            marginBottom: 10
        }
    }
  
    return (
      <div style={style}>
        {message}
      </div>
    )
  }

export default Notification