import * as types from "./actionTypes";
import axios from "axios";

const dogApi = "https://dog.ceo/api/breeds/image/random";

export function getDogs() {
  return function(dispatch) {
    axios
      .get(dogApi)
      .then(res =>
        dispatch({
          type: types.FETCH_DOG_SUCCESS,
          payload: res.data.message
        })
      )
      .catch(err =>
        dispatch({
          type: types.FETCH_DOG_FAIL,
          payload: err
        })
      );
  };
}
