import { handleActions } from "redux-actions";
import { ACTION_TYPES } from "./Productblock.constant";
import { produce } from "immer";
import chain1 from "../../Assets/Imgs/chain1.jpeg";
import ear from "../../Assets/Imgs/ear.jpeg";
import bangle1 from "../../Assets/Imgs/bangle1.jpeg";
import bangle2 from "../../Assets/Imgs/bangle2.jpeg";
import bangle3 from "../../Assets/Imgs/bangle3.jpeg";
import bangle4 from "../../Assets/Imgs/bangle4.jpeg";
import chain2 from "../../Assets/Imgs/chain2.jpeg";

const initialState = {
  gridData: [
    { title: "Earrings", imgs: ['https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_320/v1704722281/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Earrings_DT', chain1] },
    { title: "Bracelets", imgs: ['https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_320/v1704722282/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Bracelets_DT', chain2] },
    { title: "Necklaces", imgs: ['https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_320/v1704722280/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Necklaces_DT', ear] },
    { title: "Rings", imgs: ['https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_320/v1704722279/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Rings_DT', bangle1] },
    { title: "Men's", imgs: ['https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_320/v1704722280/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Mens_DT', bangle2] },
    { title: "Gifts", imgs: ['https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_320/v1704722278/campaigns/2024/Q1_Puffy%20Charlotte/01%20Homepages/01%20Launch/Category%20Carousel/Desktop/Gifts_DT', bangle3] },
  ],
  gridPoster:[
    {title:"NEW IN: MINI DIAMONDS",imgs:'https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1920,q_auto/q_auto/v1708114355/campaigns/2024/Q1_Mini%20Diamonds/DT/FY24_MiniDiamonds_SidekickA_DT.jpg',buy:"SHOP THE DROP"},
    {title:"OUR CHAIN LINEUP",imgs:'https://res.cloudinary.com/mejuri-com/image/upload/f_auto,c_limit,w_1920,q_auto/q_auto/v1708541645/2024/FEB%20EVERGREEN/WEB/FEB%2023/Chains-sidekickb-D.png',buy:"SHOP NOW"},

  ],
   storesAndService:[{productimg:chain1,country:"india"},{productimg:chain2,country:"pakistan"},{productimg:bangle4,country:"honkong"}],
    selectedProduct:""
   
};

export default handleActions(
  {
    // [ACTION_TYPES.SET_REQUESTED_FEATURES_LOADING]: (state, { data } = {}) =>
    //   produce(state, (draft) => {
    //     draft.loading = true;
    //   }),
    [ACTION_TYPES.SELECTEDPRODUCT]: (state, { selectedType } = {}) =>
      produce(state, (draft) => {
        draft.selectedProduct = selectedType;
      }),
  },
  initialState
);
