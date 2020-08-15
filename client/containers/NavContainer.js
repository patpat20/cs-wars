import React from 'react';

const NavContainer = (props) => {
  return (
    <div id='nav'>
      {' '}
      <img
        style={{ width: '60px' }}
        src={`https://robohash.org/set_set4/${Math.random()}`}
      ></img>
      {props.username}
    </div>
  );
};
export default NavContainer;
