import React from 'react';
import { Link } from 'react-router-dom';

export const Button = props => {
  return (
    <div>
      <Link to={`/${props.buttonName}`}>
        <button className="button-primary">{props.buttonName}</button>
      </Link>
    </div>
  );
};
