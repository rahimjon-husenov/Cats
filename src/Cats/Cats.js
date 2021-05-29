import React from 'react'
import './Cats.css'

function Cats(props){
return(
    <div className="Card">
<img src ={props.imgUrl} />
<h3>{props.name}</h3>
<p>{props.text}</p>
    </div>
)
}
export default Cats