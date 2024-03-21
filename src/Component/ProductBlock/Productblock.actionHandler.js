import { ACTION_TYPES } from './Productblock.constant';

 export const fetchRequestedFeatures = payload => (dispatch) => {
    dispatch({ type: ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING, data: 'sgdgugydygduygduyg' });
       
};
 export const selectedtype=payload=>(dispatch)=>{
    dispatch({ type: ACTION_TYPES.SELECTEDPRODUCT, selectedType:payload });
 }
