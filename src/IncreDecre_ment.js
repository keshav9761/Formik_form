import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inc, dec, incrByAmount } from './Redux/incrementSlice'

export default function IncreDecre_ment() {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.show.value)
    const [userValue, setUserValue] = useState(5)

    // const handleInput = (e) => {
    //     setUserValue((pre)=>({...pre,[e.target.name]:e.target.value}))
    // }
    return (
        <><div style={{ display: "grid", placeContent: "center", marginTop: "20%" }}>
            <h1> Increment / Decrement Operations</h1>
            <div>
                <button onClick={() => dispatch(inc())}>Increment</button>
                <div>{data}</div>
                <button onClick={() => dispatch(dec())}>Decrement</button><br />
                <input
                    name='num1'
                    value={userValue}
                    onChange={(e)=>e.target.value}
                />
                <button onClick={() => dispatch(incrByAmount(userValue))}>Add</button>
            </div>
        </div>
        </>
    )
}
