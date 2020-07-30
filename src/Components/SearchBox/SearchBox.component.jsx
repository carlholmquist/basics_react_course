import React from 'react'
import './search-box-styles.css'

export const SearchBox = ({onchange}) => {

    return (
        <input className='fieldboi' onChange={onchange} type='search' placeholder='Search monsters' />
    )
}