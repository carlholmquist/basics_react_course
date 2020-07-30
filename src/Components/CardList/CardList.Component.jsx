import React from 'react'
import './card-list.styles.css'
import {Card} from '../Card/Card.component'

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster => <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />)}
        </div>
    )
}
