import { frontSliderConstants } from "../_constants";
// import { store } from '../_helpers/store';
// const initialUserState = {
//   arr:store
// }
// console.log(store);
export function frontSlider(state = {}, action) {
  switch (action.type) {
    case frontSliderConstants.SLIDER_REQUEST:
      return {
        loading: true
        //items : action.users
      };
    case frontSliderConstants.SLIDER_SUCCESS:
      return {
        item: action.response
      };
    case frontSliderConstants.SLIDER_FAILURE:
      return {
        error: action.error
      };

    case frontSliderConstants.CREATE_SLIDER_REQUEST:
      return {
        loading: true
        //items : action.users
      };
    case frontSliderConstants.CREATE_SLIDER_SUCCESS:
      return {
        item: [action.obj]
      };
    case frontSliderConstants.CREATE_SLIDER_FAILURE:
      return {
        error: action.error
      };

    default:
      return state;
  }
}
