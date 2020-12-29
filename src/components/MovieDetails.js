import React from 'react';

const MovieDetails = (props) => {
  const Poster = props.images.map((image) => {
    return (
      <div key={image.imdbId} className="ui horizontal card container">
        <div className="image">
          <img src={image.Poster} alt={image.Title} />
        </div>
        <div className="content">
          <div className="header">{image.Title}</div>
          <div className="meta">
            <span className="category">{image.Year}</span>
          </div>
          <div className="description">
            <p></p>
          </div>
        </div>
      </div>
    );
  });

  return <div>{Poster}</div>;
};

export default MovieDetails;
