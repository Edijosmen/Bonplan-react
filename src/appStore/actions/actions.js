
export const ADD_FILTER ='ADD_FILTER';
/**
 * 
 * @param {string} text 
 * @returns action ADD_FILTER
 */

export const addFilters = (text)=>{
    return{
        type:ADD_FILTER,
        payload:{text}
    }
}