import rootReducer from './../src/reducers/index-reducer';
import firstReducer from './../src/reducers/first-reducer';
import secondReducer from './../src/reducers/second-reducer';
import { createStore } from 'redux';
import c from './../src/constants';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  let action;

  test('Should return default if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      first: [0,1,2,3],
      second: {output: "hello"}
    });
  });

  test('Should contain historyReducer logic', () => {
    expect(store.getState().first).toEqual(firstReducer(undefined, { type: null }));
  });

  test('Should contain stepReducer logic', () => {
    expect(store.getState().second).toEqual(secondReducer(undefined, { type: null }));
  });

})
