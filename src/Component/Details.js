import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Details =({ movies }) =>{
  const navigate=useNavigate()
    const { ID } = useParams();
    console.log(ID)
  const mov = movies.find((movie) => movie.id === Number(ID));
  const handleClick=()=>{
    navigate('/')}
  return (
    <div className="container">
      <h1 style={{ color: "#DB202C", justifyContent: "center" }}>{mov.name}</h1>
      <iframe
        width="100%"
        height="500"
        src={mov.trailer}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Card>
        <Card.Body className="desc">
        <Card.Img variant="top" src={mov.posterurl}style={{ height:'50%' }}/>

          <Card.Text>
            <label style={{ fontWeight: "bold", color: "tomato" }}>
              {" "}
              Description :{" "}
            </label>
            {mov.description}
          
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="home">
        <button className="btn btn-danger" onClick={handleClick}>
          Go back to home page
        </button>
      </div>
    </div>
  );
};

export default Details;