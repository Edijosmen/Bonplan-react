import { configureStore } from "@reduxjs/toolkit"
import filtersReducer from '../slices/filters/filtersSlice'

export const CreateAppStore = configureStore({
    reducer:{
        filter: filtersReducer,
    }
})

export default CreateAppStore;