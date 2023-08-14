import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

function ReduxComp() {

const dispatch = useDispatch()
const selector = useSelector((state)=>state.username)

const update = (name)=>{
  return{
    type:"CHANGE_NAME",
    payload:{
      username:name
    }
  }
}

const handleChange=()=>{
  dispatch((update("shree")))
}
  return (
    <>
      <h1>{selector}</h1>
      <button onClick={handleChange}>Change Name</button>
    </>
  )
}

export default ReduxComp