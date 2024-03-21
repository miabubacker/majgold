import { combineReducers } from 'redux';

 import MainpageReducer from '../Component/MainPage/Mainpage.reducer';
import ProductBlockreducer from '../Component/ProductBlock/Productblock.reducer';
import FooterPageReducer from '../Component/Footer/Footer.reducer'

export const defaultReducers = {
  MainpageReducer,
  ProductBlockreducer,
  FooterPageReducer
};

export const rootReducer = combineReducers(defaultReducers);

export default {
  defaultReducers,
  rootReducer,
};
