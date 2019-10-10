import * as types from "./actionTypes";

const initialDogState = {
  dog: ["https://images.dog.ceo/breeds/spaniel-brittany/n02101388_96.jpg"],
  isFetching: false,
  error: ""
};

export function dogReducer(state = initialDogState, action) {
  switch (action.type) {
    case types.FETCH_DOG:
      return {
        ...state,
        error: "File is still building"
      };
    case types.FETCH_DOG_START:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_DOG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dog: action.payload
      };
    case types.FETCH_DOG_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
