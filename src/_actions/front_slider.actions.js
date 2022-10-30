import { frontSliderConstants } from "../_constants";
import { frontSliderService } from "../_services";
// import { history } from '../_helpers';

export const frontSliderActions = {
  getFrontSlider,
  createFrontSlider
};

function getFrontSlider() {
  return dispatch => {
    // dispatch(request({ mobile }));
    dispatch(request());

    frontSliderService.getFrontSlider().then(
      response => {
        dispatch(success(response.data.slider_arr));
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: frontSliderConstants.SLIDER_REQUEST };
  }
  function success(response) {
    return { type: frontSliderConstants.SLIDER_SUCCESS, response };
  }
  function failure(error) {
    return { type: frontSliderConstants.SLIDER_FAILURE, error };
  }
}

function createFrontSlider(obj) {
  return dispatch => {
    // dispatch(request({ mobile }));
    dispatch(request());

    frontSliderService.createFrontSlider(obj).then(
      response => {
        dispatch(success(obj));
      },
      error => {
        dispatch(failure(error.toString()));
      }
    );
  };

  function request() {
    return { type: frontSliderConstants.CREATE_SLIDER_REQUEST };
  }
  function success(obj) {
    return { type: frontSliderConstants.CREATE_SLIDER_SUCCESS, obj };
  }
  function failure(error) {
    return { type: frontSliderConstants.CREATE_SLIDER_FAILURE, error };
  }
}
