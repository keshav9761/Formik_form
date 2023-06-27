import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'

export default function UserList() {

    const data = useSelector((state) => state.counter.loginData)

    console.log("@@@@@@", data)
    return (
        <>
            <div>{data.fname}</div>
            <div>{data.phone}</div>
            <div>{data.Email}</div>
            <div>{data.gender}</div>
            <div>{data.policy}</div>
            <div>{data.password}</div>
        </>


    )
}
