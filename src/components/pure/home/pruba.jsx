import React from 'react'

export default function Pruba(props) {
    console.log(props.cimg.imgUrl)
   
  return (
    <img src= {props.cimg.imgUrl}/>
  )
}
