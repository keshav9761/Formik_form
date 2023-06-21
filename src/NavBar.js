import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <Link className="mx-5 mt-5" to="/">Home</Link> 
            <Link to='/list'>List</Link>
        </>)
}
