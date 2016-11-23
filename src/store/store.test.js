import expect from 'expect';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import {createStore} from 'redux';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
  it('should handle creating courses', () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {
      title: "Clean Code"
    };
    const expected = {
      title: "Clean Code"
    };

    // act
    const action = courseActions.createCoursesSuccess(course);
    store.dispatch(action);
    const actual = store.getState().courses[0];

    // assert
    expect(actual).toEqual(expected);
  });
});
