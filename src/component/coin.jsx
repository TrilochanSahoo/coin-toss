import React from 'react'

const Coin = (props)=>{
    console.log(props)
    return (
        <div>
            {props.face===0 ? <img src="https://images-na.ssl-images-amazon.com/images/I/51NyMaKLydL._AC_.jpg"></img> : <img src="https://www.ramint.gov.au/file/401/download?token=SjitG6Pn"></img>}
        </div>
    )
}
export default Coin