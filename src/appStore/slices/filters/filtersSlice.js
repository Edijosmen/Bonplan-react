import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        search:'',
        desde:'',
        hasta:'',
        estado:'',
        tipo:'local',
        nHabitacion:'',
        nBaños:'',
}

export const filtersSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        setfilters:(state,action)=>{
            state.search = action.payload.search
            state.desde = action.payload.desde
            state.hasta = action.payload.hasta
            state.estado = action.payload.estado
            state.tipo = action.payload.tipo
            state.nHabitacion = action.payload.nHabitacion
            state.nBaños = action.payload.nBaños
            
        },
        
    }
})

export const { setfilters } = filtersSlice.actions
export default filtersSlice.reducer