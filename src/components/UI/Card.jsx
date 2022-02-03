import React from 'react';

const Card = ({children , ...props}) => {
  return <div {...props}>{children}</div>;
};

export default Card;
