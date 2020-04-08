import React from "react";

export default ({ gifs }) => (
      <div className="grid">
        {gifs.map(gif => (
        <a href={gif.url} key={gif.id} rel="noopener noreferrer" target="_blank">
        <img src={gif.media[0].gif.url} alt={gif.name} id={gif.id}/>
        </a>
      ))}
      </div>
);
