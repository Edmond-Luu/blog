import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function BootstrapListGroup(props) {

    const listGroupElements = props.listItems.map(item => {
        return (
            <ListGroup.Item as="li">{item}</ListGroup.Item>
        )
    })

    return (
        <ListGroup as="ul" variant="flush" id="listGroup" >
            <ListGroup.Item as="li" active id="activeListGroup">
                {props.title}
            </ListGroup.Item>
            {listGroupElements}
        </ListGroup>
    )
}
