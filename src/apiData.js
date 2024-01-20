import { createSlice } from "@reduxjs/toolkit";

const apiData=createSlice({
    name :'apidata',
    initialState :{
        data:[]
    },
    reducers:{
        addData:(state,action)=>{
            state.data.push(action.payload);
        }
    }
});

export const {addData}=apiData.actions;

export default apiData.reducer;