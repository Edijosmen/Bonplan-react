import { combineReducers } from "redux";
import { addFilters } from "./addFilters";


export const rootReducer = combineReducers(
    {
        //state name:reducer tha will control it,
        filterStete: addFilters
    }
)