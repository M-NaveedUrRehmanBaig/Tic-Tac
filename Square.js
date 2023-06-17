import React from 'react'
// import { useState } from 'react'
export default function Square({value , onclic}) {

    
  return (

    <button className="box" onClick={onclic} style={ {width : "5rem" ,height : "5rem" ,margin:"5px" }} > {value} </button>
    
  )
}
