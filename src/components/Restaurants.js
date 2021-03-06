import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'


function Restaurants({item}) {
    console.log(item.cuisine_type);
    console.log(item.neighborhood);
    return (
        <>
        <Link style={{textDecoration:'none'}} to={`restaurants/${item.id}`}>
        <Card className="my-3 p-3 rounded cards">
            <Card.Img src={item.photograph} className="p-3" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <h4>{item.Title}</h4>
                </Card.Title>
                <Card.Text as="div">
                    <p><strong>Cuisine:</strong>{item.cuisine_type}</p>
                </Card.Text>
                <Card.Text as="div">
                    <p>{item.neighborhood}</p>
                </Card.Text>
            </Card.Body> 
        </Card>
        </Link>
        
        </>
    )
}

export default Restaurants