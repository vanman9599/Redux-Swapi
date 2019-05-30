import {SUCCESS, FETCHING, FAILURE} from "../actions";

const initialState = {
  characters: [], 
  isLoading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return{
        ...state, 
        error: '', 
        isLoading: true
      };
    case SUCCESS:
      console.log(action.payload);
      return{
        ...state, 
        isLoading: false,
        characters: action.payload

      }
    case FAILURE:
      return{
        ...state, 
        isLoading: false, 
        error: "HaHa you made an error!"
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
