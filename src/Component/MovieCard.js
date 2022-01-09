import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieCard = ({element}) => {
    return (
        <div>
            <section>
<Card style={{ width: '300px',height:'600px' }}>
  <Card.Img variant="top" src={element.posterurl} style={{ height:'50%' }}/>
  <Card.Body>
    <Card.Title>{element.name}</Card.Title>
    <Card.Text>
      {element.description}
    </Card.Text>
    <Link to={`/detail/${element.id}`}>
    <Button variant="primary">See details</Button></Link>
  </Card.Body>
</Card>  
</section>
      </div>
    )
}

export default MovieCard