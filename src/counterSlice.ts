import { createSlice } from "@reduxjs/toolkit";
import type{PayloadAction} from "@reduxjs/toolkit";
interface CounterState
{
    value:number;
}

const initialCounter:CounterState=
{
    value:0
}

const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounter,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value-=1;
        },
        incrementByAmount:(state,action:PayloadAction<number>)=>{
                state.value+=action.payload;
        }
        
    }
})
export const {increment,decrement,incrementByAmount} =counterSlice.actions;
//increment,decrement->functions->update Value
//increment(),decrement()
export default counterSlice.reducer;
