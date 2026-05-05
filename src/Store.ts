//Redux Store
//Context -Global Data ->components
//Props
//Store
//Store, Actions, Reducer
// Store -> Data storage
//Actions->Events
/*
BugTracking
ADD_BUG, DELETE_BUG, RESOLVE_BUG

*/
//Reducer->Event Handler
/*
plain javascript function
1. Existing Store,
2. Action

RETURN THE UPDATED STORE STATE


1. DESIGN THE STORE
2. ACTION DEFINE
3. CREATE REDUCER
4. SETUP STORE
BUG TRACKING
1. DESIGN THE STORE
    STRUCTURE OF STORE
    [
        {
            id:number,
            description:string,
            resolved:boolean
        }
    ]
        ECOMMERCE
    {
        carts:[
        {
            productid:number,
            qty:number
        }
        ],
        userAuth:{},
        favourites:[{productid:number}]
    }


2. DEFINE ACTIONS
bugtracking
ADD_BUG, DELETE_BUG,UPDATE_BUG
100         101         102
const ADD_BUG="ADD_BUG";
    ACTION->OBJECT

    ADD_BUG
    {
        type:string(ADD_BUG),
        payload:{
            description:string
        }

    }
        DELETE_BUG
        {
            type:string(DELETE_BUG),
            payload:{
                id:number
            }    
        }
        RESLOVE_BUG
        {
            type:string(RESOLVE_BUG),
            payload:{
                id:number
            }
        }
        
    
        REDUCER->FUNCTION
        function bugReducer(state,action)
        //return the update state
*/

import { createStore } from "redux"

//1.DESIGN THE STORE
type StoreStateType={
    id:number,
    description:string,
    resolved:boolean
}
//2.actions
//
type AddAction={
    type:"Add",
    payload:{
        description:string
    }
}
type DeleteAction={
    type:"Delete",
    payload:
    {
        id:number
    }
}
type ResolveAction={
    type:"Resolve",
    payload:
    {
        id:number
    }
}
type BugActions=AddAction|DeleteAction|ResolveAction;

let id=1;
//3 Reducers
function BugReducer(state:StoreStateType[]=[],action:BugActions)
{
    if(action.type=="Add")
    {
        const updatedState=[...state];
        updatedState.push({
            id:id,
            description:action.payload.description,
            resolved:false
        })
        return updatedState;
    }
    if(action.type=="Delete")
    {
        const updatedState=state.filter((item)=>{
            if(item.id!=action.payload.id)
                return true;
        })
        return updatedState;

    }
    if(action.type=="Resolve")
    {
        const updatedState=state.map((item)=>{
            if(item.id==action.payload.id)
                item.resolved=true;
            return item;
        })
        return updatedState;
        
    }
        return state;
}
//4 Setup Store
const store=createStore(BugReducer);
console.log(store.getState());

store.dispatch({
    type:"Add",
    payload:{
        description:"First Bug"
    }
})
console.log(store.getState());
store.dispatch({
    type:"Resolve",
    payload:{
        id:1
    }
})

console.log(store.getState())
