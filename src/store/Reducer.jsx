import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:{},
    technical_skills:[],
    personal_skills:[],
    objectives:[],
    educations:[],
    experiences:[],
    cources:[],
    projects:[],
}

const MySlice = createSlice({
    name:"data",
    initialState,
    reducers : {
        Additems : (state,action)=>{
            state.items = action.payload
        },
        AddArrayItems : (state,action)=>{
             const {item,array} = action.payload
            state[array] = item
        },
        Addproject : (state,action)=>{

            state.projects = action.payload
        },
    }

})

const MyReducer = MySlice.reducer

export default MyReducer

export const {Additems, AddArrayItems , Addproject } =MySlice.actions 
