import secondReducer from '../src/reducers/second-reducer';
import c from './../src/constants';



describe('secondReducer', () => {
  let action;
  const stateShape = {output: "hello"};

  test('Should return default if no action type is recognized', () => {
    expect(secondReducer(stateShape, { type: null })).toEqual(stateShape);
  });

  test('ACTION_ONE will return "goodbye" as the value for output', () => {
    action = {
      type: c.ACTION_ONE,
      output: "goodbye"
    }
    expect(secondReducer(stateShape, action)).toEqual({output: "goodbye"});
  });

  test('ACTION_TWO will change the state slice to an array', () => {
    action = {
      type: c.ACTION_TWO
    }
    expect(secondReducer(stateShape, action)).toEqual(["hello"]);
  });

})
