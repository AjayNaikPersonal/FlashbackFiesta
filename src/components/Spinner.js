import React, { Component } from 'react'
import loading from '../loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
       <img src={loading} style={{ width: 30, height: 30 }} alt=''/>
      </div>
    )
  }
}

export default Spinner
