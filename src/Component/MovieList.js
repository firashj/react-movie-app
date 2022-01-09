import React, { useState } from 'react'
import Filter from './Filter';
import MovieCard from './MovieCard';

const MovieList = ({movie}) => {
    const [text, settext] = useState("");
  const [rate, setrate] = useState("");
  const filterText = (txt) => {
    settext(txt);
  };
  const filterRate = (rt) => {
    setrate(rt);
  };
    return (
        <div>
                  <Filter filterText={filterText} filterRate={filterRate} />

            <div className="movieStyle">
{movie.filter(
            (movie) =>
              movie.name.toLowerCase().includes(text.toLowerCase()) &&
              movie.rating >= rate
          ).map((el)=><MovieCard key={el.id} element={el}/>).reverse()}
        </div>
        </div>
    )
}

export default MovieList