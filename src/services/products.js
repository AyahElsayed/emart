import axios from 'axios';
import {BASE_URL, END_POINTS} from '../api'

export const allProducts = () => {
    return axios.get(`${BASE_URL}${END_POINTS.allProducts}`);
};