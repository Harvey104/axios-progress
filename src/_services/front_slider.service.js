import Axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import USER_URL from '../_helpers/api-url';

export const frontSliderService = {
    getFrontSlider,
    createFrontSlider
};

function getFrontSlider() {
    loadProgressBar();
    const url = USER_URL + 'front_slider/read_all.php';
    return Axios.post(url).then()
}

function createFrontSlider(obj) {
    loadProgressBar();
    const url = USER_URL + 'front_slider/create.php';
    return Axios.post(url, obj ).then()
}

Axios.interceptors.request.use(request => {
    request.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
    //  console.log(request);
    return request;
}, error => {
    // console.log(error);
    return Promise.reject(error)
})
Axios.interceptors.response.use(response => {
    // console.log(response);
    return response;
}, error => {
    // console.log(error);
    return Promise.reject(error)
})
