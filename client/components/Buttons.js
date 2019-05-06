import React from 'react';
import { Link } from 'react-router-dom';

export const Button = props => {
  return (
    <div>
      <Link>
        <button class="button-primary">{props.buttonName}</button>
      </Link>
    </div>
  );
};
