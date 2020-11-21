import React, { useState } from 'react';
import './style.css';

const Joke = (props) => {
  const [likeUp, setLikeUp] = useState(props.likes);
  const [likeDown, setLikeDown] = useState(props.dislikes);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={`assets/img/${props.id}.png`} />
            <p className="user-name">{props.name}</p>
          </div>

          <p className="joke__text">{props.text}</p>
        </div>
        <div className="joke__likes">
          <button
            onClick={() => setLikeUp(likeUp + 1)}
            id="btn-up"
            className="btn-like btn-like--up"
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likeUp}
          </span>
          <button
            onClick={() => setLikeDown(likeDown + 1)}
            id="btn-down"
            className="btn-like btn-like--down"
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {likeDown}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Joke;
