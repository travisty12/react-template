import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  var styledNavbar = {
    backgroundColor: 'lightgrey',
    paddingTop: '50px'
  };
  return (
    <div style={styledNavbar}>
      <h1>NAVBAR JSX: This is where you could put your navbar</h1>
      <Link to="/">Home</Link> | <Link to="/newpath">Highlights</Link>
    </div>
  );
}

export default Navbar;
