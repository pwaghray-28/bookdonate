import React from 'react'
import{Header} from 'react-native-elements'
export const MyHeader = props=>{return(
   <Header 
   centerComponent = {{Text:props.title,style:{color:'coral',fontSize:25,fontWeight:'bold'}}} 
   backgroundColor = "beige" /> 
)}