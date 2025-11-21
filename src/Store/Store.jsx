import { configureStore, createSlice } from "@reduxjs/toolkit";
const SlidHeader=createSlice({
    name:"Slider",
    initialState:{SHeader: 0 },
    reducers:{
        Increase :(state,action) => {
            if(state.SHeader === action.payload){
                state.SHeader=0
            }else(
                state.SHeader++
            )
        },
        Decrease:(state,action)=>{
            if(state.SHeader <=0){
                state.SHeader=action.payload
            }else{
                state.SHeader--
            }
        }
    }
})
export const ActionSlider=SlidHeader.actions
export const Store=configureStore({
    reducer : {
        slider:SlidHeader.reducer,
    },
})