import { handleActions } from "redux-actions";
// import { ACTION_TYPES } from "./Home.constant";
import { produce } from "immer";

const initialState = {
  contract: [{title:"Help",details:["Shipping",'Returns & Exchanges','Warrenty','Accessablity Statement','FAQ','Contact Us']},
{title:"Stores & Service",details:["Stores","prieceimg Studio","Styles Appointment"]},
{title:"Resources",details:["Jewelery Care"," Ring Sizer","Styles Appointment","Piercing Aftercare","Style Edit","Supplier Code of Conduct","Membership"]},
{title:"About Maj",details:["Our Mission","Materials","Designs",'Reveiwer',"Carrier"]},
],


};

export default handleActions(
  {
    // [ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING]: (state, { data } = {}) =>
    //   produce(state, (draft) => {
    //     draft.loading = true;
    //   }),

    // [ACTION_TYPES.SET_REQUESTED_FEATURES]: (state, { data } = {}) =>
    //   produce(state, (draft) => {
    //     draft.loading = false;
    //    data.products.forEach((data)=>{data.count=1})
    //     draft.DashboardProductData = data.products || [];
    //   }),
  },
  initialState
);
