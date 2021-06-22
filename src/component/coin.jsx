import React from 'react'

const Coin = (props)=>{
    // const [coinClass,setCoinClass] = useState('coin')
    console.log(props)
    let res = "coin"
    props.face===0 ? res="coin animate-tails" : res="coin animate-heads"
    return (
        <div className={res}>
            <div className="heads"></div>
            <div className="tails"></div>
            {/* {res} */}
        </div>
    )
}
export default Coin