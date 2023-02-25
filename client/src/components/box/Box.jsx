import React from 'react'
import './box.css'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Box = props => {
    const className = {
        box: 'box',
        purple: props.purple && 'box-purple',
        fullheight: props.fullheight && 'box-fullheight'

    }

    return (
        <Card style={{ width: '18rem' }} className={Object.values(className).join(' ')} >
            {props.children}
        </Card >
    )
}

export default Box
