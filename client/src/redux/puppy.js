import * as ActionTypes from './ActionTypes';

export const Puppy = (state = {
        isLoading: true,
        errMess: null,
        puppy: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PUPPY:
            return {...state, isLoading: false, errMess: null, puppy: action.payload};
        case ActionTypes.PUPPY_LOADING:
            return {...state, isLoading: true, errMess: null, puppy: []};
        case ActionTypes.PUPPY_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};
