import { GET_ALL_DOGS } from "./action-types";
import axios from "axios";

export function getAllDogs() {
    return async (dispatch) => {
        try {
            const infoAPI = (await axios.get(`http://localhost:3001/dogs`)).data;
            return dispatch({ type: GET_ALL_DOGS, payload: infoAPI });
        } catch (error) {
            console.log(error);
        }
    }
};