// counter app bu using the functional based components

import React, {useState} from "react";
import SignLogin from "./signUp and Login";

function UseState(){
  console.log(useState());
  const [count,setCount]=useState(0)

  // const a =useState()
  // console.log(a);

  // const b=[undefined,function(){
  //   console.log("bbbbb");
    
  // }]

  // console.log(x, "xxxxx");
  // console.log(y, "yyyyy");
  
  // const [x,y]=b

  function inc(){
    setCount(count+1)
  };
  function dec(){
    setCount(count-1)
  }

  return(
    <div>
      <button onClick={dec} disabled={count===0}>-</button>
      {count}
      <button onClick={inc} disabled={count===10}>+</button>
    </div>
  )
}
export default UseState;