import c from './../constants';

export default (state = {output: 'hello'}, action) => {
  let newState;
  switch(action.type) {
  case c.ACTION_ONE:
    newState = {output: action.output};
    return newState;
  case c.ACTION_TWO:
    newState = [state.output];
    return newState;
  default:
    return state;
  }
};
