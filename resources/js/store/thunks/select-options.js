import axios from "../../axios";
import { selectOptionsActions } from "../slices/select-options";

export const getLists = () => {
    return async (dispatch) => {
        axios.get('/select-options').then(res => {
            dispatch(selectOptionsActions.setSelectOptions(res.data));
        })
    }
}