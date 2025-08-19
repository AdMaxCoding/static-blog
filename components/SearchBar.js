'use client'
import React, {useState} from 'react'

export default function SearchBar(props) {   
const {searchValue, setSearchValue} = props
  return (
    <div className="search-container">
    <input className="search-input" placeholder="Search..." value={searchValue} onChange={(e)=>{
        setSearchValue(e.target.value)
    }}/>
    </div>
  )
}
