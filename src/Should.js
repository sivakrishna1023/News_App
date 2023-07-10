import React, { Component } from 'react'
import Loader from './Loader.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
         <img src={Loader} alt="" />
      </div>
    )
  }
}
