import React from 'react';
import { connect } from 'react-redux';

function Content(){
  return (
    <div>
      <h3>CONTENT JSX: Additional body content could go here.</h3>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    first: state.first,
    second: state.second
  };
};

export default connect(mapStateToProps)(Content);
