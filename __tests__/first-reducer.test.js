import firstReducer from '../src/reducers/first-reducer';
import c from './../src/constants';



describe('firstReducer', () => {
  let action;
  const stateShape = [0,1,2,3];

  test('Should return default if no action type is recognized', () => {
    expect(firstReducer(stateShape, { type: null })).toEqual(stateShape);
  });

  test('ACTION_ONE will return the sum of the state indices', () => {
    action = {
      type: c.ACTION_ONE
    }
    expect(firstReducer(stateShape, action)).toEqual(6);
  });

  test('ACTION_TWO will return the state doubled, still as an array', () => {
    action = {
      type: c.ACTION_TWO
    }
    expect(firstReducer(stateShape, action)).toEqual([0,2,4,6]);
  });

})
