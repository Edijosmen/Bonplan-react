import { ADD_FILTER } from "../actions/actions";


let initialState =[];

export const addFilters = (state=initialState,action) => {
    return [
        ...state,
        {
            search:action.payload.search,
            desde:action.payload.desde,
            hasta:action.payload.hasta,
            estado:action.payload.estado,
            tipo:action.payload.tipo,
            nHabitacion:action.payload.nHabitacion,
            nBaños:action.payload.nBaños,
        }
    ]
};